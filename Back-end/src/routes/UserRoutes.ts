import { Router } from "express";
import { UserController } from "../controllers/userController";

const route = Router();

route.post('/create', UserController.createUser);

export default route