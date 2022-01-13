const modelUsuario = require("../models/usuario")
const jwtVerify = require('../config/validatedAuth-Jwt')



exports.registrarUsuario = async (req,res) =>{

    const usuario = await modelUsuario.findOne({Usuario: req.body.Usuario})

    if(usuario) return res.status(400).json({"Mensaje":"El Usuario ya se encuentra registrado"})

    if(req.body.Contraseña == undefined) return res.status(400).json({"Mensaje":"La Contraseña es obligatoria"})

    modelUsuario.create(req.body)
    .then((data) => res.status(201).json({data}))
    .catch((error) => res.status(401).send(error)) 
}


exports.iniciarSesion = async (req,res) =>{


    const usuario = await modelUsuario.findOne({Usuario: req.body.Usuario})

    
    if(!usuario) return res.status(401).json({"Mensaje":"Usuario y/o Contraseña invalidos"})

    if(req.body.Contraseña !== usuario.Contraseña) return res.status(401).json({"Mensaje":"Usuario y/o Contraseña invalidos"})


    let IdUser = usuario._id
    let rol = usuario.Rol
    const token = jwtVerify.crearToken(IdUser,rol)
    return res.status(201).json({token}) 

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

