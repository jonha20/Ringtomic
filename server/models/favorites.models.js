const pool = require("../config/sqlConfig");
const queries = require("../utils/queries"); // Queries SQL

const getFavorites = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllFavs, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// GET by location
const getFavsByLocation = async (email, location) => {
  let query = queries.getFavByLocation;
  const params = [email, `%${location}%`];
  const result = await pool.query(query, params);
  return result.rows;
};

// addFav
const addFavorite = async (fav) => {
  const { iduser, idpitch, customname } = fav;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createFav, [
      iduser,
      idpitch,
      customname,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// deleteFav
const deleteFavorite = async (fav) => {
  const { iduser, idpitch } = fav;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.deleteFav, [iduser, idpitch]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// UpdateFav
const updateFavorite = async (fav) => {
  const { customname, iduser, idpitch } = fav;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const params = [customname, iduser, idpitch];
    const res = await pool.query(queries.updateFav, params);
    result = res.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

module.exports = {
  getFavorites,
  getFavsByLocation,
  addFavorite,
  deleteFavorite,
  updateFavorite,
};
