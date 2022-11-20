import { Router } from "express";
import {
  createProduto,
  getProdutos,
  getProduto,
  updateProduto,
  deleteProduto,
} from "../controllers/produto.js";

const router = Router();

const URL = "/produto";

router.post(URL, (req, res) => {
  createProduto(req, res);
});

router.get(URL, (req, res) => {
  getProdutos(req, res);
});

router.get(`${URL}/:id`, (req, res) => {
  getProduto(req, res);
});

router.put(`${URL}/:id`, (req, res) => {
  updateProduto(req, res);
});

router.delete(`${URL}/:id`, (req, res) => {
  deleteProduto(req, res);
});

export default router;
