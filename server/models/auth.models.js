const pool = require("../config/sqlConfig");
const bcrypt = require("bcryptjs");
const queries = require("../utils/queries"); // Queries SQL

async function createUser(
  name,
  email,
  password,
  logged = false,
  rol = "user"
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [ name,email, hashedPassword, logged, rol];

  const result = await pool.query(queries.createUser, values);
  return result.rows[0];
}

async function findUserByEmail(email) {
    const values = [email];
    const result = await pool.query(queries.getUserByEmail, values);
    return result.rows[0];
}


module.exports = { createUser , findUserByEmail };
