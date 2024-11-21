import { prisma } from "../utils/dataBase.js";

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
      select: {
        kategoriId: true,
        namaProduk: true,
        jumlah: true,
        deskripsi: true,
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
    const produk = await prisma.produk.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!produk) {
      res.status(404).json({ message: "Produk tidak ditemukan" });
    }
    res.status(200).json({
      data: produk,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const updateProduk = async (req, res) => {
  const { kategoriId, namaProduk, jumlah, deskripsi } = req.body;
  try {
    let produk = await prisma.produk.update({
      where: { id: Number(req.params.id) },
      data: {
        kategoriId: kategoriId,
        namaProduk: namaProduk,
        jumlah: jumlah,
        deskripsi: deskripsi,
      },
    });
    if (!produk) {
      res.status(404).json({ message: "Produk tidak ditemukan" });
    }
    produk = await prisma.produk.findUnique({
      where: { id: Number(req.params.id) },
      data: {
        kategoriId: kategoriId,
        namaProduk: namaProduk,
        jumlah: jumlah,
        deskripsi: deskripsi,
      }
    })
    res.status(200).json({
      message: "Produk Dimodif ges",
      data: produk,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const deleteProduk = async (req, res) => {
  try {
    const produk = await prisma.produk.delete();
    res.status(200).json({
      data: produk,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const getProdukByKategori = async (req, res) => {
  try {
    const produk = await prisma.produk.findMany();
    res.status(200).json({
      data: produk,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const getProdukByKategoriId = async (req, res) => {
  try {
    const produk = await prisma.produk.findMany();
    res.status(200).json({
      data: produk,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
