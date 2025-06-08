const express = require("express");
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); // o tu configuración
const router = express.Router();
const user = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/register", user.register); // Registrar usuario

router.post("/login", user.login); // Iniciar sesión

router.get("/logout", auth, user.logout); // Cerrar sesión

// // Cambiar foto de perfil
// router.put('/photo/:id', upload.single('image'), Userpgadmin.changePhoto);


module.exports = router;
