import { Router } from "express";
import { UserController } from "../controllers/userController";
import { UserRepository } from "../repositories/repos/UserRepo";

const route = Router();
const repo = new UserRepository();

const controll = new UserController(repo)

route.post('/create', controll.register);

export default route