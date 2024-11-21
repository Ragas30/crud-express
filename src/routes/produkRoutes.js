import { getProduk } from "../controllers/produkController";

export const produk = express.Router();
produk.post("/produk", createProduk);
produk.get("/produk", getProduk);
