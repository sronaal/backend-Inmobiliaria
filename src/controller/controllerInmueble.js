const modeloInmueble = require("../models/inmuebles")


exports.crearInmueble = async (req,res) =>{

    modeloInmueble.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(400).json(error))
}

exports.listarInmuebles = async (req,res) =>{

    const inmueble = await modeloInmueble.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error))
}