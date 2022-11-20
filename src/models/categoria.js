import mongoose, { Schema, model } from "mongoose";

const CategoriaSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});

export default model("Categoria", CategoriaSchema);
