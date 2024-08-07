import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { Middlewares } from '../middleware/middleware';
import  imageStorage  from '../utils/image-update';
import multer from 'multer';

const route = Router();
const middleware = new Middlewares();

const imageUpload = multer(imageStorage);



route.post('/create',imageUpload.single('image') ,UserController.create);
route.post('/login', UserController.Login);
route.patch('/update',middleware.checkToken, middleware.checkCookie, UserController.Update);
route.delete('/delete', middleware.checkToken, middleware.checkCookie, UserController.Delete);

export default route;