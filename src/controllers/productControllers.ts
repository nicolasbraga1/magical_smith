import { Request, Response } from 'express';
import productServices from '../services/productServices';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = await productServices.create({ name, price, orderId });
  res.status(201).json(product);
}

async function get(_req: Request, res: Response) {
  const products = await productServices.get();
  res.status(200).json(products);
}

export default { create, get };