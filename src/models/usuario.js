const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({

    nombre:{
        type:String,
        required: true
    },
    apellido:{
        type:String,
        required: true
    },
    telefono:{
        type:String,
        required: true
    },
    direccion:{
        type:String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true
    },
    Rol:{
        type:String,
        default:'Cliente',
    },
})

module.exports = mongoose.model('Usuario',usuarioSchema)