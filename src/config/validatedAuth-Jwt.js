const jwt = require("jsonwebtoken")

const secretKey = "837626@37646"

exports.crearToken = (IdUser,Rol) =>{
    
    const token = jwt.sign({IdUser,Rol},secretKey)
    return token
}

exports.tokenChangePassword = (IdUser) =>{

    const token = jwt.sign({IdUser},secretKey,{expiresIn: 5})
    return token
}


exports.validarToken = (req,res,next) =>{
    
    const token = req.header('auth-token')

    if(!token) return res.status(401).json({error:"Token requerido"})

    try {
        const data = jwt.verify(token,secretKey)
        req.IdUser = data
        next()
    } catch (error) {
        res.status(401).json({error:"Token invalido"})
    }
}

exports.validarRol = (roles) =>{

    return (req,res,next) =>{
        const userRole = req.IdUser.Rol
        
        if(roles.includes(userRole)){
            next()
        }else{
            return res.status(401).json({error:"No tienes permiso"})
        }
    }
}