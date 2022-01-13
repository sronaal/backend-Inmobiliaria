const app = require('./app')
const database = require('./config/datatabase')
require("dotenv").config()

const PORT = 3000

app.listen(PORT,() => console.log("SERVER API ON PORT: ", PORT))