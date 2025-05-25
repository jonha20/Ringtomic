const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/sqlConfig");
const queries = require("../utils/queries");
const { createUser } = require("../models/auth.models"); // Importar la función createUser

/**
 * Registra un nuevo usuario y redirige a la página de login.
 *
 * @async
 * @function register
 * @param {Object} req - Objeto de solicitud HTTP (requiere email, name, password, logged, rol) en el body.
 * @param {Object} res - Objeto de respuesta HTTP.
 *
 * @throws Devuelve un mensaje de error si ocurre un fallo al crear el usuario.
 */

async function register(req, res) {
  if (!req.body) {
    return res.status(400).json({ error: "No se recibió body en la petición" });
  }
  const { name, email, password, logged = false, rol = "user" } = req.body;
  try {
    const newUser = await createUser(name, email, password, logged, rol);
    res.status(201).json({ message: "Usuario registrado", user: newUser });
  } catch (error) {
    res.status(500).send("Error en el registro");
  }
}

/**
 * Inicia sesión del usuario, verifica credenciales, genera un token JWT y redirige a la vista de anuncios.
 *
 * @async
 * @function login
 * @param {Object} req objeto de petición HTTP
 * @param {Object} res objeto de respuesta HTTP
 * @throws Devuelve un mensaje de error si el usuario no existe, si la contraseña es incorrecta o si hay un error en la base de datos.
 */

async function login(req, res) {
  let client;
  try {
    const { email, password } = req.body;

    // Buscar usuario
    client = await pool.connect();
    const result = await client.query(queries.getUserByEmail, [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Verificar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Actualizar estado de login
    await client.query("UPDATE users SET logged = true WHERE id = $1", [
      user.id,
    ]);
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        logged: user.logged,
        img: user.image_url,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).set("Authorization", `Bearer ${token}`);

    const isSecure = req.secure || req.headers["x-forwarded-proto"] === "https"; // Verifica si la conexión es segura (HTTPS)
    const sameSite = isSecure ? "none" : "lax"; // "lax" para desarrollo, "none" para producción con HTTPS

    // res
    //   .cookie("access_token", token, {
    //     httpOnly: false, // o true si no necesitas acceder desde JS
    //     secure: isSecure,
    //     sameSite: sameSite,
    //     maxAge: 3600000,
    //     path: "/",
    //   })
    //   .send();
    res
      .cookie("access_token", token, {
        httpOnly: false, // true si no necesitas leerla desde JS
        secure: true, // ✅ OBLIGATORIO para SameSite=None
        sameSite: "none", // ✅ OBLIGATORIO para dominios cruzados
        maxAge: 3600000,
      })
      .send();
  } catch (error) {
    res.status(500).json({ message: "Error en el inicio de sesión" });
  } finally {
    if (client) client.release();
  }
}

async function logout(req, res) {
  let client;
  try {
    const token = req.cookies.access_token;
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      await pool.query("UPDATE users SET logged = false WHERE id = $1", [
        decoded.id,
      ]);
    }

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
  } finally {
    if (client) client.release();
  }
}

module.exports = { register, login, logout };
