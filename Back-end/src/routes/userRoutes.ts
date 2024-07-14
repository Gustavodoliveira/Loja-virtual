import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { Middlewares } from '../middleware/middleware';

const route = Router();
const middleware = new Middlewares();

route.post('/create', UserController.create);
route.post('/login', UserController.Login);
route.patch('/update',middleware.checkToken, UserController.Update);
route.delete('/delete', middleware.checkToken, UserController.Delete);

export default route;