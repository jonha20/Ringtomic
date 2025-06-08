const pool = require("../config/sqlConfig");
const queries = require("../utils/queries"); // Queries SQL
const bcrypt = require("bcrypt"); // Importar bcrypt para la autenticación

// GET by ID
const getUserById = async (id) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getUserById, [id]);
    result = data.rows[0];
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// GET by Email
const getUserByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getUserByEmail, [email]);
    result = data.rows[0];
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};


async function createUser(
  name,
  email,
  password_hash,
  img_url  
) {
  const hashedPassword = await bcrypt.hash(password_hash, 10);
  const values = [ name, email, hashedPassword, img_url || 'https://i.imgur.com/HeIi0wU.png'];  // Imagen por defecto si no se proporciona

  const result = await pool.query(queries.createUser, values);
  return result.rows[0];
}

// Change photo
// const changePhoto = async (image_url, id) => {
//   let client, result;
//   try {
//     client = await pool.connect(); // Espera a abrir conexión
//     const data = await client.query(queries.updatePhoto, [image_url, id]);
//     result = data.rowCount;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   } finally {
//     client.release();
//   }
//   return result;
// };

const user = {
  getUserById,
  getUserByEmail,
  createUser,
  // changePhoto,
  };

module.exports = user; // Exportar el objeto ad con la función createAd
