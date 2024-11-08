
import { EsquemaGeneral } from "./generalSchema.js";
import { model } from "mongoose";

export const empleadoModel = new model ('empleado',EsquemaGeneral)