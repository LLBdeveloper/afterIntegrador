import mongoose from "mongoose"

mongoose.connect("mongodb+srv://LLBdeveloper:admiadmi@cluster0.kdv9gnv.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then( () => console.log("conexion exitosa!") )
    .catch( (error) => console.log("Tenemos un error", error))