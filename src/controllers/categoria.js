import CategoriaModel from "../models/categoria.js";

export const createCategoria = async (req, res) => {
  const categoria = new CategoriaModel(req.body);
  try {
    await categoria.save();
    res.status(201).send(categoria);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getCategorias = async (req, res) => {
  try {
    const categorias = await CategoriaModel.find({});
    res.send(categorias);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getCategoria = async (req, res) => {
  try {
    const categoria = await CategoriaModel.findById(req.params.id);
    if (!categoria) {
      res.status(404).send("Categoria não encontrada");
    }
    res.send(categoria);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const categoria = await CategoriaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!categoria) {
      res.status(404).send("Categoria não encontrada");
    }
    res.send(categoria);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const categoria = await CategoriaModel.findByIdAndDelete(req.params.id);
    if (!categoria) {
      res.status(404).send("Categoria não encontrada");
    }
    res.send(categoria);
  } catch (error) {
    res.status(500).send(error);
  }
};
