//Este archivo define las rutas con las operaciones del usuario en la app

const router = require('express').Router();
//Inicializa el enrutador que define las rutas

router.post('/crear', (req, res) => res.send('Respuesta del servidor, funciona la peticion post'));
// Ruta post en /crear para crear usuario

module.exports = router;