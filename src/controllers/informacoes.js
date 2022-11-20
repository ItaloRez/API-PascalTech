import InformacoesModel from "../models/informacoes.js";

export const createInformacao = async (req, res) => {
  const informacoes = new InformacoesModel(req.body);
  try {
    await informacoes.save();
    res.status(201).send(informacoes);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getInformacoes = async (req, res) => {
  try {
    const informacoes = await InformacoesModel.find({});
    res.send(informacoes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getInformacao = async (req, res) => {
  try {
    const informacoes = await InformacoesModel.findById(req.params.id);
    if (!informacoes) {
      res.status(404).send("Informações não encontradas");
    }
    res.send(informacoes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateInformacao = async (req, res) => {
  try {
    const informacoes = await InformacoesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!informacoes) {
      res.status(404).send("Informações não encontradas");
    }
    res.send(informacoes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteInformacao = async (req, res) => {
  try {
    const informacoes = await InformacoesModel.findByIdAndDelete(req.params.id);
    if (!informacoes) {
      res.status(404).send("Informações não encontradas");
    }
    res.send(informacoes);
  } catch (error) {
    res.status(500).send(error);
  }
};
