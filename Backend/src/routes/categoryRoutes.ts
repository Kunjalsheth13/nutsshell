import { Router } from 'express';
import { getCategories, createCategory, createSubCategory } from '../controllers/categoryController';

const router = Router();

router.get('/', getCategories);
router.post('/', createCategory); // Protect this route in a real app
router.post('/subcategory', createSubCategory); // Protect this route in a real app

export default router;
