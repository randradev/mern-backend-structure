const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generarJWT } = require("../services/generar-jwt");

const crearUser = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  if (!name || !lastName || !email || !password) {
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  }

  try {
    console.log("Datos recibidos:", name, lastName, email, password); // Consola de verificación

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    console.log("Datos a guardar en la BD:", name, lastName, email, hashedPassword); // Consola de verificación

    const newUser = await User.create({
      name: name,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    console.log("Nuevo usuario creado:", newUser); // Consola de verificación

    res.status(201).json({
      msg: "Usuario creado correctamente",
      status: 201,
    });
  } catch (error) {
    console.log("Error:", error); // Consola de verificación
    res.status(500).json({
      msg: "Error al crear el usuario",
      status: 500,
    });
  }
};

module.exports = {
  crearUser,
};
