import mongoose, { Schema, model } from "mongoose";

const InformacoesSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true,
  },
  slogan: String,
  descricao: String,
  callToAction: String,
  email: String,
  telefone: String,
  endereco: {
    cep: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    estado: String,
  },
  redesSociais: {
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
  },
});

export default model("Informacoes", InformacoesSchema);
