const express = require("express")
const cors = require("cors")
const rutas = require('./routes/rutas')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',rutas)



module.exports = app