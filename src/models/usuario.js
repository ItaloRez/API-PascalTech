import mongoose, { Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  foto: String,
  telefones: {
    type: Array,
  },
  endereco: {
    cep: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    estado: String,
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
  carrinho: {
    type: Array,
    default: [],
  },
});

export default model("Usuario", UsuarioSchema);
