import { Request, Response } from 'express';
import prisma from '../config/db';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true, subCategory: true }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { category: true, subCategory: true }
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
};

// Admin creating a product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, discount, imageUrl, categoryId, subCategoryId } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        discount,
        imageUrl,
        categoryId,
        subCategoryId
      }
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};
