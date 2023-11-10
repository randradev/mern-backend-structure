require('dotenv').config();
//Se cargan las variables de entorno del .env para mantener las credenciales de la BBDD seguras y fuera del código fuente.

const mongoose = require('mongoose');
//Se importa Mongoose, librería de modelado de datos orientada a objetos (ODM) para MongoDB y Node.js

const dbConnection = async() => {
//Se utiliza una función asíncrona para gestionar la conexión con la BBDD.


    try {
    //Se utiliza el bloque try-catch para el manejo de errores, si hay algún error durante la conexión se caputra en bloque.
        await mongoose.connect(process.env.MONGO_URI);
        //la instrucción await se usa para esperar que la operación definida se complete (conexión con la BBDD). mongoose.connect() es ka operación para conectarse a la base de datos. Aquí se llama a la variable del .env para proteger la BBDD.
        console.log('BBDD conectada');
        //Mensaje de éxito si la conexión fue exitosa.
    } catch (error) {
        //Este bloque catch entra en juego si hay un error
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos");
        //Muestra por consola el error
    }
}

module.exports = { dbConnection };
//Se exporta la función para ser utilizada en index.js y realizar la conexión