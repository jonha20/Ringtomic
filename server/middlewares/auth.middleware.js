const jwt = require('jsonwebtoken');
const path = require("path");
require("dotenv").config( { path: path.resolve(__dirname, '../.env') });



const auth = (req, res, next) => {
    // Obtener el token desde las cookies
    const token = req.cookies.access_token;
    console.log('Token recibido:', token);

    if (!token) {
        return res.status(401).json({ message: 'No hay token, autorización denegada' });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Guardar los datos decodificados del token en req.user
        console.log('Token verificado:', req.user);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token no válido' });
    }
};

module.exports = auth; 