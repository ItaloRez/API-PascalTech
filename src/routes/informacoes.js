import { Router } from "express";

import {
  createInformacao,
  getInformacoes,
  getInformacao,
  updateInformacao,
  deleteInformacao,
} from "../controllers/informacoes.js";

const router = Router();

const URL = "/informacao";

router.post(URL, (req, res) => {
  createInformacao(req, res);
});

router.get(URL, (req, res) => {
  getInformacoes(req, res);
});

router.get(`${URL}/:id`, (req, res) => {
  getInformacao(req, res);
});

router.put(`${URL}/:id`, (req, res) => {
  updateInformacao(req, res);
});

router.delete(`${URL}/:id`, (req, res) => {
  deleteInformacao(req, res);
});

export default router;
