const express = require("express");
const cors = require("cors"); // Importar cors
const router = express.Router();
const pitchesController = require("../controllers/pitches.controller");

// Configuración de CORS para esta ruta específica
const corsOptions = {
  origin: ["http://localhost:5173", "https://ringtomic.netlify.app"], // Dominios permitidos
  credentials: true,
};

// Obtener pitch por location con CORS habilitado
router.get('/search', cors(corsOptions), pitchesController.getPitchesByLocation);

module.exports = router;