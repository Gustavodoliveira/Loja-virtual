import { Router } from 'express';
import { UserController } from '../controllers/userController';

const route = Router();

route.post('/create', UserController.create);
route.post('/login', UserController.Login);
route.patch('/update', UserController.Update);
route.delete('/delete', UserController.Delete);

export default route;