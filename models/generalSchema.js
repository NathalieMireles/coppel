import { Schema } from "mongoose";

export const EsquemaGeneral = new Schema ({
   
    name:{
        type: String, required: true
    },

    apepat:{
        type: String, required: true

    },

    edad:{
        type: Number, required: true

    },

    


})