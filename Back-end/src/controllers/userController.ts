import { Request, Response, response } from "express";
import { UserRepository } from "../repositories/repos/UserRepo";
import { User } from "../entities/User";
import { IRepoUser } from '../repositories/IRepoUser';

export class UserController{
	private repo: IRepoUser

	constructor(rep: IRepoUser) {
		this.repo = rep
	}

async register(req: Request, res: Response) {
		const { name, email, phone, password, CPF} = req.body
		try {
			const resp =  this.repo.create({
				name, email, phone, password, CPF
			})

			return response.status(201).json(resp)
		} catch (error) {
			console.log(error);
			
		}
	}
}