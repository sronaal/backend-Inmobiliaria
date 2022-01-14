const userModel = require("../models/usuario")


exports.listarUsuarios = async (req,res) =>{

    const users = userModel.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(300).json(error) )
}

exports.editarUsuario = async (req,res) =>{
    
}