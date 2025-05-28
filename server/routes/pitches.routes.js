const express = require("express");
const router = express.Router();
const pitchesController = require("../controllers/pitches.controller");

// Obtener todos los pitches
router.get("/", pitchesController.getAllPitches);

// Obtener pitch por location
router.get('/search', pitchesController.getPitchesByLocation);

module.exports = router;