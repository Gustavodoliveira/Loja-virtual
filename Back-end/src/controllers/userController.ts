import { Request, Response } from "express";
import { User } from "../db/entities/User";

export class UserController {
	static async createUser(req: Request, res: Response) {
		const { name, cpf, phone } = req.body

		if(!name) return res.status(401).json('name is required')
		if(!cpf) return res.status(401).json('cpf is required')
		if(!phone) return res.status(401).json('phone is required')

		const user = new User(name, cpf, phone)	

		try {
			const message = await user.createUser()
			res.status(200).json(message);
		} catch (error) {
			new Error(error as string)
		}
	}
}