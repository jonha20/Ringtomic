const queries = require('../models/user.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();


async function register(req, res) {
  if (!req.body) {
    return res.status(400).json({ error: "No se recibió body en la petición" });
  }
  const { name, email, password_hash, img_url } = req.body;
  try {
    const newUser = await queries.createUser(name, email, password_hash, img_url);
    res.status(201).json({ message: "Usuario registrado", user: newUser });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    if (error.code === "23505") {
      // Código de error para violación de unicidad (email ya existe)
      return res.status(409).json({ message: "El email ya está en uso" });
    }
    res.status(500).send("Error en el registro");
  }
}

async function login(req, res) {
  try {
    const { email, password_hash } = req.body;

    // Buscar usuario
    const user = await queries.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password_hash, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image_url || null, // Asegúrate de que 'image' sea opcional
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image_url || null, // Asegúrate de que 'image' sea opcional
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).set("Authorization", `Bearer ${token}`);


    const isProduction = process.env.NODE_ENV === "production";

    res
      .cookie("access_token", token, {
        httpOnly: false,
        secure: isProduction, // true en prod (HTTPS), false en dev (HTTP)
        sameSite: isProduction ? "none" : "lax", // none para prod, lax para dev
        maxAge: 3600000,
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: false,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        maxAge: 3600000,
      })
      .status(200)
      .json({ token: token, msg: "Login correcto" })
      .send();
  } catch (error) {
    res.status(500).json({ message: "Error en el inicio de sesión" });
    console.error("Error en el inicio de sesión:", error);

  }
}

async function logout(req, res) {
  try {
    const isSecure = req.secure || req.headers["x-forwarded-proto"] === "https"; // Verifica si la conexión es segura (HTTPS)
    const sameSite = isSecure ? "none" : "lax"; // "lax" para desarrollo, "none" para producción con HTTPS

    res.clearCookie("access_token", {
      httpOnly: true, // igual que en login
      sameSite: sameSite,
      secure: isSecure,
      path: "/",
    });
    res.status(200).json({
      message: "Cierre de sesión exitoso",
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el logout" });
  }
}

//ChangePhoto
// const changePhoto = async (req, res) => {
//     const { id } = req.params;

//     if (!req.file) {
//         return res.status(400).json({ error: "URL de imagen requerida" });
//     }
//    const image_url = req.file.filename; // o req.file.path según tu modelo
//     try {
//         const updatedUser = await Userpgadmin.changePhoto(image_url, id);
//         if (updatedUser) {
//             res.status(200).json({ message: "Foto de perfil actualizada", user: updatedUser });
//         } else {
//             res.status(404).json({ error: "Usuario no encontrado" });
//         }
//     } catch (error) {
//         res.status(500).json({ error: "Error en la BBDD" });
//     }
// };


module.exports = {
    // changePhoto,
    register,
    login,
    logout
}; 