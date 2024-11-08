import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { testEmpleados } from "./controllers/EmpleadosController.js";
import { testSalario } from "./controllers/SalarioController.js";
import { testSupervisores } from "./controllers/SupervisoresControllers.js";

dotenv.config()

mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log(" si jala")
})
.catch((error)=>{
    console.log("ya valio")
})

const app = express();
app.use((cors));
app.listen(4000,()=>{
    console.log("Se esta escuchando")
})

testEmpleados()
testSalario()
testSupervisores()