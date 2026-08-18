import { Request, Response } from 'express';
import prisma from '../config/db';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      include: { subCategories: true }
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching categories' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
      data: { name }
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Error creating category' });
  }
};

export const createSubCategory = async (req: Request, res: Response) => {
  try {
    const { name, categoryId } = req.body;
    const subCategory = await prisma.subCategory.create({
      data: { name, categoryId }
    });
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: 'Error creating subcategory' });
  }
};
