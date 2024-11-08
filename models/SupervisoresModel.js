import { EsquemaGeneral } from "./generalSchema.js";
import { model } from "mongoose";

export const SupervisoresModel = new model ('supervisores',EsquemaGeneral)