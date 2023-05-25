import { Router } from 'express';
import orderControllers from '../controllers/orderControllers';

const orderRouter = Router();

orderRouter.get('/orders', orderControllers.get);

export default orderRouter;