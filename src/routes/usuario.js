import { Router } from "express";

import {
  createUsuario,
  getUsuarios,
  getUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuario.js";

const router = Router();

const URL = "/usuario";

router.post(URL, (req, res) => {
  createUsuario(req, res);
});

router.get(URL, (req, res) => {
  getUsuarios(req, res);
});

router.get(`${URL}/:id`, (req, res) => {
  getUsuario(req, res);
});

router.put(`${URL}/:id`, (req, res) => {
  updateUsuario(req, res);
});

router.delete(`${URL}/:id`, (req, res) => {
  deleteUsuario(req, res);
});

export default router;
