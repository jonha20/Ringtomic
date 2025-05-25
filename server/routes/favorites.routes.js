const express = require("express");
const router = express.Router();
const favsController = require("../controllers/favorites.controllers");


// Obtener pitches favoritos por localización
router.get("/search", favsController.getFavsByLocation);

// Obtener todos los favoritos de un usuario
router.get("/:email", favsController.getAllFavorites);

// Añadir un favorito
router.post("/", favsController.addFavorite);

// Eliminar un favorito
router.delete("/", favsController.deleteFavorite);

// Actualizar un favorito
router.put("/", favsController.updateFavorite);

// Reservar un campo favorito (mejorado para usar el ID en la URL)
router.put("/:id", favsController.reserveFav);



module.exports = router;