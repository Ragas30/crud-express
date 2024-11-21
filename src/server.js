import express from "express";
import cors from "cors";
import { kategori } from "./routes/kategoriRoute.js";
import { produk } from "./routes/produkRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", kategori);
app.use("/api", produk);

app.listen(3000, () => {
  console.log("Server Masuk");
});
