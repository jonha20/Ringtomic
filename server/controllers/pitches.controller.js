const pitchesModel = require('../models/pitches.models');

const getPitchesByLocation = async (req, res) => {
    const { location } = req.query;
    try {
        const pitches = await pitchesModel.getPitchesByLocation(location);
        if (pitches.length > 0) {
            res.status(200).json(pitches);
        } else {
            res.status(404).json({ message: "No se encontraron pitches con ese criterio" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
        console.error("Error al obtener los pitches por ubicación:", error);
    }
};

const pitchesController = {
    getPitchesByLocation,
};

module.exports = pitchesController;