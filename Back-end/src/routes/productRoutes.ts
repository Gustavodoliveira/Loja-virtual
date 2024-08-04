import { Router } from 'express';
import { ProductController } from '../controllers/productController';
import { Middlewares } from '../middleware/middleware';

const ProductRoutes = Router();
const middlewares = new Middlewares();

const midds = [ middlewares.checkToken, middlewares.checkCookie ];

ProductRoutes.get('/myProducts', midds, ProductController.myProducts);
ProductRoutes.get('/allProducts', midds, ProductController.findAllProducts);
ProductRoutes.get('/getProduct', midds, ProductController.findByIdProduct);
ProductRoutes.post('/create', midds, ProductController.create);
ProductRoutes.patch('/update', ProductController.Update);
ProductRoutes.delete('/delete', ProductController.Delete);

export default ProductRoutes;	