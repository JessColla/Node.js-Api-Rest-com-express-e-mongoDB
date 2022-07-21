import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutoresController.listarAutores)
  .get("/autores", AutoresController.listaAutorPorId)
  .post("/autores", AutoresController.cadastrarAutores)
  .put("/autores/:id", AutoresController.atualizarAutor)
  .delete("/autores/:id", AutoresController.deletarAutor);

export default router;
