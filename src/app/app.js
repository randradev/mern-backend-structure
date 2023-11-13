//Este archivo es el punto central de la configuración de express. También define cómo se manejan solicitudes y gestionan rutas.

//IMPORTACIÓN DE DEPENDENCIAS

const express = require('express');
//Importa dependencia express para el framework web del servidor.

const cors = require('cors');

const morgan = require('morgan');
//Importa dependencias de Morgan para el registro de solicitudes HTTP.

const router = require('../routes/user.routes');
//Importa el archivo user.routes donde se definen los endpoints.

//-------//

const app = express();
//Inicializa una instancia de Express.

//CONFIGURACIÓN DE MIDDLEWARES

app.use(morgan('dev'));
//Configura middleware predeterminado: Morgan para imprimir por consola las peticiones.

app.use(express.json());
//Configura middleware para analizar datos JSON de solicitudes entrantes.

app.use(express.urlencoded({extended: true}));
//Configura middleware para analizar datos codificados en la URL.

app.use(cors());

//RUTAS

app.use('/api', router);
//Monta enrutador 'api', por lo tanto todas las rutas definidas en router están bajo la ruta base '/api'.

app.use('*', (req, res) => res.status(404).send('404 - Ruta no encontrada'));
//Manejador para cualquier ruta que no se ajuste a las rutas definidas, devuelve mensaje de error.

//EXPORTACIÓN
module.exports = app;