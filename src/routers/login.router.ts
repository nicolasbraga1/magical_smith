import { Router } from 'express';
import loginControllers from '../controllers/loginControllers';

const loginRouter = Router();

loginRouter.post('/login', loginControllers.login);

export default loginRouter;