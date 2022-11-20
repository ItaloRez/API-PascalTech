import mongoose, { Schema, model } from "mongoose";

const ProdutoSchema = new Schema({
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
  preco: {
    type: Number,
    required: true,
  },
  qtd_estoque: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  imagens: {
    type: Array,
    required: true,
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
  data_atualizacao: {
    type: Date,
    default: null,
  },
  data_exclusao: {
    type: Date,
    default: null,
  },
  avaliacoes: {
    type: Array,
    default: [],
  },
});

export default model("Produto", ProdutoSchema);
