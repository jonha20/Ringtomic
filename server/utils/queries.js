const queries = {
  //PITCHES
  getAllPitches: `SELECT * FROM public.pitches`,
  getPitchByLocation: `SELECT * FROM pitches WHERE city ILIKE $1 OR state ILIKE $1 OR name ILIKE $1`,


  //USERS
  getUsers: `SELECT * FROM public.users;`,
  getUserById: `SELECT * FROM users WHERE id=$1;`,
  getUserByEmail: `SELECT * FROM users WHERE email=$1;`,
  createUser: `INSERT INTO users (name, email, password, logged, role)
            VALUES ($1,$2,$3,$4,$5);`,
  updateUser: `UPDATE users
    SET 
        email=$1, 
        name=$2, 
        role=$3
    WHERE
        email=$4;`,
  deleteUser: `DELETE FROM users WHERE email=$1;`,

  //FAVS
  getAllFavs: `SELECT us.name, pi.city, pi.state, pi.access FROM public.favorites 
inner join users us on iduser = us.id
inner join pitches pi on idpitch = pi.id 
WHERE email = $1`,
  getFavByLocation: `SELECT us.name, pi.city, pi.state, pi.access FROM public.favorites 
inner join users us on iduser = us.id
inner join pitches pi on idpitch = pi.id 
WHERE email = $1 AND (pi.city ILIKE $2 OR pi.state ILIKE $2 OR pi.name ILIKE $2);`,
  createFav: `INSERT INTO favorites (iduser, idpitch, customname)
            VALUES ($1,$2,$3);`,
  deleteFav: `DELETE FROM favorites WHERE iduser=$1 and idpitch=$2;`,
  updateFav: `UPDATE favorites
    SET customname = $1
    WHERE iduser = $2 AND idpitch = $3;`,
};

module.exports = queries;
