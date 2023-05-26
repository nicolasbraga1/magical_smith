import { Request, Response } from 'express';
import loginServices from '../services/loginServices';
import mapStatusHTTP from '../util/mapStatus';
import jwt from '../util/jwt';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const serviceResponse = await loginServices.login(username, password);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  const token = jwt.sign(username);
  return res.status(200).json({ token });
}

export default {
  login,
};