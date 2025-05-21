require('dotenv').config();
const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3001; // Puerto a usar por el servidor
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));


console.log(`Directorio de la app: ${path.join(__dirname, '../client/build')}`);
// Handles any requests that don't match the ones above
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/', (req, res) => {
  res.send('¡Ringtomic!');
});

const userRoutes = require('./routes/user.routes');
const pitchesRoutes = require('./routes/pitches.routes');
const favoritesRoutes = require('./routes/favorites.routes');


app.use('/users', userRoutes);
app.use('/pitches', pitchesRoutes);
app.use('/favorites', favoritesRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});