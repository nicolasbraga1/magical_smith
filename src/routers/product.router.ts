import { Router } from 'express';
import productControllers from '../controllers/productControllers';

const productRouter = Router();

productRouter.post('/products', productControllers.create);

export default productRouter;