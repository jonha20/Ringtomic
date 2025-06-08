const pool = require("../config/sqlConfig");
const queries = require("../utils/queries"); // Queries SQL

// GET by location
const getPitchesByLocation = async (location) => {
    let query = queries.getPitchByLocation;
    const params = [`%${location}%`];
    const result = await pool.query(query, params);
    return result.rows;
};
const pitchesModules = {
    getPitchesByLocation,
};

module.exports = pitchesModules; 