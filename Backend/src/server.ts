import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './config/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';

// Basic health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Nutsshell Backend is running!' });
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
