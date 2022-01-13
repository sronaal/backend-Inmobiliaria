const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({

    Usuario:{
        type: String,
        required: true
    },
    Contraseña:{
        type: String,
        required: true
    },
    Rol:{
        type:String,
        default:'Cliente',
    }
})

module.exports = mongoose.model('Usuario',usuarioSchema)