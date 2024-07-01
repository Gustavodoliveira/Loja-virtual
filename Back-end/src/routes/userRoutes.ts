import { Router } from 'express';
import { UserController } from '../controllers/userController';

const route = Router();

route.post('/create', UserController.register);
route.post('/login', UserController.Login);

export default route;