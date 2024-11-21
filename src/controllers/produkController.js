import { Prisma } from "@prisma/client";

const prisma = new Prisma.Client();

export const createProduk = async (req, res) => {
  const { kategoriId, namaProduk, jumlah, deskripsi } = req.body;
  try {
    const produk = await prisma.produk.create({
      data: {
        kategoriId: kategoriId,
        namaProduk: namaProduk,
        jumlah: jumlah,
        deskripsi: deskripsi,
      },
    });
    res.status(201).json({
      message: "Produk Masuk",
      data: produk,
    });
  } catch (error) {
    res.status(500).json({
      errors: error.message,
    });
  }
};

export const getProduk = async (req, res) => {
  try {
    const produk = await prisma.produk.findMany();
    res.status(200).json({
      data: produk,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const getProdukById = async (req, res) => {
  try {
    const produk = await prisma.produk.findUnique();
    res.status(200).json({
      data: produk,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
