import { getProduk } from "../controllers/produkController";

export const produk = express.Router();
produk.post("/produk", createProduk);
produk.get("/produk", getProduk);
produk.get("/produk/:id", getProdukById);
produk.put("/produk/:id", updateProduk);
produk.delete("/produk/:id", deleteProduk);
