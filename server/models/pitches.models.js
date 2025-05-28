const pool = require("../config/sqlConfig");
const queries = require("../utils/queries"); // Queries SQL


// GET
const getAllPitches = async () => {
  let client, result;
  try {
    // Verificar permisos

    client = await pool.connect(); // Espera a abrir conexión
    const data = await client.query(queries.getAllPitches);
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
const getPitchesByLocation = async (location) => {
    let query = queries.getPitchByLocation;
    const params = [`%${location}%`];
    const result = await pool.query(query, params);
    return result.rows;
};
const pitchesModules = {
    getAllPitches,
    getPitchesByLocation,
};

module.exports = pitchesModules; 