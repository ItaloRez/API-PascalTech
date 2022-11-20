import ProdutoModel from "../models/produto.js";

export const createProduto = async (req, res) => {
  const produto = new ProdutoModel(req.body);
  try {
    await produto.save();
    res.status(201).send(produto);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getProdutos = async (req, res) => {
  try {
    const produtos = await ProdutoModel.find({});
    res.send(produtos);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProduto = async (req, res) => {
  try {
    const produto = await ProdutoModel.findById(req.params.id);
    if (!produto) {
      res.status(404).send("Produto não encontrado");
    }
    res.send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateProduto = async (req, res) => {
  try {
    const produto = await ProdutoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!produto) {
      res.status(404).send("Produto não encontrado");
    }
    res.send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteProduto = async (req, res) => {
  try {
    const produto = await ProdutoModel.findByIdAndDelete(req.params.id);
    if (!produto) {
      res.status(404).send("Produto não encontrado");
    }
    res.send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};
