import { Request, Response } from 'express';
import loginServices from '../services/loginServices';
import mapStatusHTTP from '../util/mapStatus';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({ message: '"username" and "password" are required' });
  }

  const serviceResponse = await loginServices.login(username, password);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  login,
};