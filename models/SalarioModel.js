import { Schema, model } from "mongoose";

 const SalarioEsquema = new Schema ({
   
    area:{
        type: String, required: true
    },

    cargo:{
        type: String, required: true

    },

    monto:{
        type: Number, required: true

    },



})

export const SalarioModel = new model('salarios', SalarioEsquema);