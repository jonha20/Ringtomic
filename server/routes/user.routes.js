const express = require("express");
const router = express.Router();
const Userpgadmin = require("../controllers/user.controller");
const { register, login, logout } = require('../controllers/auth.controller');
// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

// Obtener todos los users
router.get("/", Userpgadmin.getAllUsers);

// Obtener user por ID
router.get("/:id",  Userpgadmin.getUserById);

// Actualizar user
router.put("/", Userpgadmin.updateUser);

// Eliminar user
router.delete("/:email", Userpgadmin.deleteUser);

// Recuperar contraseña
router.put('/recoverpassword', Userpgadmin.recoverPassword);

// Restaurar contraseña
router.put('/restorepassword', Userpgadmin.restorePassword);

// Registrar usuario
router.post("/register", register);

// Iniciar sesión
router.post("/login", login);

// Cerrar sesión
router.post("/logout", logout);


module.exports = router;
