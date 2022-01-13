const crypto = require('crypto-js')
const modelUsuario = require("../models/usuario")
const jwtVerify = require('../config/validatedAuth-Jwt')



exports.registrarUsuario = async (req,res) =>{

    // Validaciones de Datos

    if(req.body.correo == undefined) return res.status(401).json({"Mensaje":"El Usuario es obligatorio"})
    
    const usuario = await modelUsuario.findOne({correo: req.body.correo})
    
    if(usuario) return res.status(400).json({"Mensaje":"El Usuario ya se encuentra registrado"})
    if(req.body.contraseña == undefined) return res.status(401).json({"Mensaje":"La Contraseña es obligatoria"})

    // Cifrado de contraseña
    var user = new modelUsuario(req.body)
    let contraseñaHash = crypto.MD5(user.contraseña).toString()
    user.contraseña  = contraseñaHash
    
    // Guardado de data
    modelUsuario.create(user)
    .then((data) => res.status(201).json({"Mensaje":"Usuario Registrado"}))
    .catch((error) => res.status(401).send(error)) 
}


exports.iniciarSesion = async (req,res) =>{


    console.log(req.body)
    const usuario = await modelUsuario.findOne({correo: req.body.correo})
    
    if(!usuario) return res.status(401).json({"Mensaje":"Usuario y/o Contraseña invalidos"})
    let contraseñaHash = crypto.MD5(req.body.contraseña).toString()
    if(contraseñaHash !== usuario.contraseña) return res.status(401).json({"Mensaje":"Usuario y/o Contraseña invalidos"})


    let IdUser = usuario._id
    let rol = usuario.Rol
    const token = jwtVerify.crearToken(IdUser,rol)
    return res.status(201).json({"token":token,"rol":rol}) 

}

exports.validateUser = async (req,res) =>{

    try {
        const user = await modelUsuario.findOne({Usuario: req.body.Usuario})
        
        if(!user) return res.status(401).json({Error:"El Usuario no existe"})
        
        let IdUser = user.Id
        const token = jwtVerify.tokenChangePassword(IdUser)

        return res.status(201).json({token})

    } catch (error) {
        res.status(400).json(error)
    }
}

