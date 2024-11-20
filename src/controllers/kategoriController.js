import { prisma } from "../utils/dataBase.js";

export const createKategori = async (req, res) => {
  const { name } = req.body;
  try {
    const kategori = await prisma.kategori.create({
      data: {
        name: name,
      },
      select: {
        name: true,
        createdAt: true,
      },
    });
    res.status(201).json({
      message: "kontol masuk ges",
      data: kategori,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const getKategori = async (req, res) => {
  try {
    const kategoris = await prisma.kategori.findMany();
    res.status(200).json({
      data: kategoris,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const getKategoriById = async (req, res) => {
  // const { id } = parseInt(req.params, 10);

  try {
    const kategori = await prisma.kategori.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!kategori) {
      res.status(404).json({ message: "Kontol tidak ditemukan" });
    }
    res.status(200).json({ data: kategori });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const updateKategori = async (req, res) => {
  const { name } = req.body;

  try {
    let kategori = await prisma.kategori.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!kategori) {
      res.status(404).json({ message: "Kontol tidak ditemukan" });
    }
    kategori = await prisma.kategori.update({
      where: { id: Number(req.params.id) },
      data: { name },
    });
    res.status(200).json({
      message: "kontol Dimodif ges",
      data: kategori,
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

export const deleteKategori = async (req, res) => {
  try {
    await prisma.kategori.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(204).json(null);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
