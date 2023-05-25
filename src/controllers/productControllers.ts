import { Request, Response } from 'express';
import productServices from '../services/productServices';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = await productServices.create({ name, price, orderId });
  res.status(201).json(product);
}

export default { create };