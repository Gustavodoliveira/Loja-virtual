import { Router } from 'express';
import { ProductController } from '../controllers/productController';

const ProductRoutes = Router();

ProductRoutes.post('/create', ProductController.create);

export default ProductRoutes;