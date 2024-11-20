import express from "express";
import { createKategori, deleteKategori, getKategori, getKategoriById, updateKategori } from "../controllers/kategoriController.js";
export const kategori = express.Router();
kategori.post("/kategori", createKategori);
kategori.get("/kategori", getKategori);
kategori.get("/kategori/:id", getKategoriById);
kategori.put("/kategori/:id", updateKategori);
kategori.delete("/kategori/:id", deleteKategori);
