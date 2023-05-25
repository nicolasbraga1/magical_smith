import { Router } from 'express';
import productControllers from '../controllers/productControllers';

const productRouter = Router();

productRouter.post('/products', productControllers.create);
productRouter.get('/products', productControllers.get);

export default productRouter;