import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String },
    nacionalidade: { type: String },
  },
  {
    versionKey: false,
  }
);

const autores = mongose.models("autores", autorSchema);

export default autores;
