//Este archivo define las rutas con las operaciones del usuario en la app

const router = require('express').Router();
//Inicializa el enrutador que define las rutas

const { crearUser } = require('../controllers/user.controller');

router.post('/crear', crearUser);
// Ruta post en /crear para crear usuario

module.exports = router;