import { Router } from "express";

import userRouter from "./user.js";

const router = Router();

// Adicionar Rotas
router.use(userRouter);

export default router;
