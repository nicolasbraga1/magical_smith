import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';

async function login(username: string, password: string):
Promise<ServiceResponse<UserSequelizeModel>> {
  const user: UserSequelizeModel | null = await UserModel.findOne({ where: { username } });
  let serviceResponse: ServiceResponse<UserSequelizeModel>;
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    serviceResponse = { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    return serviceResponse;
  }
  return { status: 'SUCCESSFUL', data: user };
}

export default { login };