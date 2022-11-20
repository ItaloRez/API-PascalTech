import { Router } from "express";

import produtoRouter from "./produto.js";
import categoriaRouter from "./categoria.js";
import informacoesRouter from "./informacoes.js";
import usuarioRouter from "./usuario.js";

const router = Router();

// Adicionar Rotas
router.use(produtoRouter);
router.use(categoriaRouter);
router.use(informacoesRouter);
router.use(usuarioRouter);

export default router;
