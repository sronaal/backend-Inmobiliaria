const mongoose = require("mongoose")

const inmuebleSchema = mongoose.Schema({

    Nombre:{
        type:String
    },
    Descripcion:{
        type:String
    },
    Estado:{
        type:String
    },
    archivo:{
        type:String
    }
})


module.exports = mongoose.model('inmuebles',inmuebleSchema)