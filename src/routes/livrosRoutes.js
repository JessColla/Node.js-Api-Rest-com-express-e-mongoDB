import express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivrosController.listarLivros)
  .get("/livros/busca", LivrosController.listarLivrosPorEditora)
  .get("/livros", LivrosController.listaLivroPorId)
  .post("/livros", LivrosController.cadastrarLivros)
  .put("/livros/:id", LivrosController.atualizarLivro)
  .delete("/livros/:id", LivrosController.deletarLivro);

export default router;
