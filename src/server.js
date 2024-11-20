import express from "express";
import cors from "cors";
import { kategori } from "./routes/kategoriRoute.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", kategori);

app.listen(3000, () => {
  console.log("Server Masuk");
});
