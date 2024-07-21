import { Router } from 'express';
import { ProductController } from '../controllers/productController';
import { Middlewares } from '../middleware/middleware';

const ProductRoutes = Router();
const middlewares = new Middlewares();

const midds = [ middlewares.checkToken, middlewares.checkCookie ];

ProductRoutes.get('/allProducts', midds, ProductController.findAllProducts);
ProductRoutes.get('/getProduct', midds, ProductController.findByIdProduct);
ProductRoutes.post('/create', midds, ProductController.create);

export default ProductRoutes;	