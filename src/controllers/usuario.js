import UsuarioModel from "../models/usuario.js";

export const createUsuario = async (req, res) => {
  const usuario = new UsuarioModel(req.body);
  try {
    await usuario.save();
    res.status(201).send(usuario);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.find({});
    res.send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioModel.findById(req.params.id);
    if (!usuario) {
      res.status(404).send("Usuario não encontrado");
    }
    res.send(usuario);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!usuario) {
      res.status(404).send("Usuario não encontrado");
    }
    res.send(usuario);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioModel.findByIdAndDelete(req.params.id);
    if (!usuario) {
      res.status(404).send("Usuario não encontrado");
    }
    res.send(usuario);
  } catch (error) {
    res.status(500).send(error);
  }
};
