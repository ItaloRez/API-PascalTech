import { Router } from "express";
import {
  createCategoria,
  getCategorias,
  getCategoria,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categoria.js";

const router = Router();

const URL = "/categoria";

router.post(URL, (req, res) => {
  createCategoria(req, res);
});

router.get(URL, (req, res) => {
  getCategorias(req, res);
});

router.get(`${URL}/:id`, (req, res) => {
  getCategoria(req, res);
});

router.put(`${URL}/:id`, (req, res) => {
  updateCategoria(req, res);
});

router.delete(`${URL}/:id`, (req, res) => {
  deleteCategoria(req, res);
});

export default router;
