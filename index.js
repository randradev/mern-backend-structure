//En este archivo se importa la lógica principal del servidor, desde otros archivos

require ('dotenv').config();
//Cargar las variables de entorno desde .env

const app = require('./src/app/app');
//Importa app.js, que contiene la lógica principal de la aplicación

const port = process.env.PORT;
//Importa el valor de PORT definido en .env, y si no se utilizará el puerto 3000.

const { dbConnection } = require('./src/database/conexion');
//Importa la función que establece la conexión con la BBDD.

app.listen(port, () => console.log(`Server conectado y corriendo en el puerto ${port}`))
//Inicia el servidor Express definido y nuestra por consola un mensaje que confirma la inicialización del servidor

dbConnection();
//Llama la función dbConnection que inicia la conexión con la BBDD