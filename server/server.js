require('dotenv').config();
const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.json());

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.send('¡Ringtomic!');
});

const userRoutes = require('./routes/user.routes');
const pitchesRoutes = require('./routes/pitches.routes');
const favoritesRoutes = require('./routes/favorites.routes');

// app.get("*", (req, res) => { res.sendFile(path.join(__dirname + '/client/build/index.html')) });

app.use('/users', userRoutes);
app.use('/pitches', pitchesRoutes);
app.use('/favorites', favoritesRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});