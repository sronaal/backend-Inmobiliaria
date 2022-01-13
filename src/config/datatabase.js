const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://admin:TGfMtSyXM1X0oZf9@cluster0.atkk4.mongodb.net/database?retryWrites=true&w=majority")
.then(() => console.log("Database Connect"))
.catch((error) => console.log(error))


