import { Router } from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/productController';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct); // In a real app, protect this route

export default router;
