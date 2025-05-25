const favs = require("../models/favorites.models");


// Obtener todos los favoritos de un usuario
const getAllFavorites = async (req, res) => {
    const { email } = req.params;
    try {
        const favorites = await favs.getFavorites(email);
        if (favorites.length > 0) {
            res.status(200).json(favorites);
        } else {
            res.status(404).json({ message: "No se encontraron favoritos" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

const getFavsByLocation = async (req, res) => {
    const { email, location } = req.query;
    // Si no hay location, busca solo por email
    if (!location) {
        return getAllFavorites({ params: { email } }, res);
    }
    try {
        const pitches = await favs.getFavsByLocation(email, location);
        if (pitches.length > 0) {
            res.status(200).json(pitches);
        } else {
            res.status(404).json({ message: "No se encontraron pitches con ese criterio" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

// Añadir un favorito
const addFavorite = async (req, res) => {
    const { iduser, idpitch, customname } = req.body;
    try {
        const result = await favs.addFavorite({ iduser, idpitch, customname });
        if (result > 0) {
            res.status(201).json({ message: "Favorito añadido correctamente" });
        } else {
            res.status(400).json({ message: "Error al añadir el favorito" });
        }
    } catch (error) {
        res.status(500).json( "El campo ya esta en favoritos" );
    }
};

// Eliminar un favorito
const deleteFavorite = async (req, res) => {
    const { iduser, idpitch } = req.body;
    try {
        const result = await favs.deleteFavorite({ iduser, idpitch });
        if (result > 0) {
            res.status(200).json({ message: "Favorito eliminado correctamente" });
        } else {
            res.status(400).json({ message: "Error al eliminar el favorito" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

//Modificar un favorito
const updateFavorite = async (req, res) => {
    const { customname, iduser, idpitch } = req.body;
    try {
        const updated = await favs.updateFavorite({ customname, iduser, idpitch });
        if (updated > 0) {
            res.status(200).json({ message: "Favorito actualizado correctamente" });
        } else {
            res.status(404).json({ message: "No se encontró el favorito para actualizar" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

//reservar un favorito
const reserveFav = async (req, res) => {
  const { id } = req.params; // Obtén el ID de la URL
  try {
    const result = await favs.reserveFav(id);
    if (result > 0) {
      res.status(200).json({ message: "Campo reservado con éxito" });
    } else {
      res.status(404).json({ message: "Campo no encontrado o ya reservado" });
    }
  } catch (error) {
    console.error("Error reservando el campo:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getAllFavorites,
    getFavsByLocation,
    addFavorite,
    deleteFavorite,
    updateFavorite,
    reserveFav
}