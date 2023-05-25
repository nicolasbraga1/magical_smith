import bcrypt from 'bcryptjs';
import jwt from '../util/jwt';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';

async function login(username: string, password: string): Promise<ServiceResponse<string>> {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const token = jwt.sign({ id: user.dataValues.id, user: user.dataValues.username });
  return { status: 'SUCCESSFUL', data: token };
}

export default { login };