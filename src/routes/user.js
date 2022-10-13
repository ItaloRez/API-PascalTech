import { Router } from "express";

const router = Router();

const URL = "/user";

router.get(URL, (req, res) => {
  res.send("Hello World!");
});

export default router;
