import { Router } from "express";
import { UserController } from "../controllers/userController";
import { UserRepository } from "../repositories/repos/UserRepo";

const route = Router();

route.post('/create', UserController.register);

export default route