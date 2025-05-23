const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend
//   credentials: true // Permite el envío de cookies
// }));

app.use(cors({
  origin: function (origin, callback) {
    // Permitir cualquier origen (incluido sin origen, por ejemplo herramientas de prueba)
    callback(null, true);
  },
  credentials: true,
}));


app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client')));
console.log(path.join(__dirname, '../client/index.html')) // Imprime la ruta de la carpeta client

// Handles any requests that don't match the ones above
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// app.get('/', (req, res) => {
//   res.send('¡Ringtomic!');
// });

const userRoutes = require('./routes/user.routes');
const pitchesRoutes = require('./routes/pitches.routes');
const favoritesRoutes = require('./routes/favorites.routes');


app.use('/users', userRoutes);
app.use('/pitches', pitchesRoutes);
app.use('/favorites', favoritesRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});