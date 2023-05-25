import { Request, Response } from 'express';
import orderServices from '../services/orderServices';

async function get(_req: Request, res: Response) {
  const orders = await orderServices.get();
  res.status(200).json(orders);
}

export default { get };