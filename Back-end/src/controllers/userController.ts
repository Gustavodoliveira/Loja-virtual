import { Request, Response } from "express";
import { User } from "../db/entities/User";
import createId from "../utils/createId";
import { Token } from "../utils/createToken";
import { UserModel } from '../db/models/ModelUser';

export class UserController {
	static async createUser(req: Request, res: Response) {
		const { name, cpf, phone } = req.body


		if(!name) return res.status(401).json('name is required')
		if(!cpf) return res.status(401).json('cpf is required')
		if(!phone) return res.status(401).json('phone is required')

		const newId  = createId()
		const user = new User(name, cpf, phone, newId)	

		const userExist = await user.findUser();
		
		if(userExist) res.status(401).json({message: 'Cpf already exist try another'});
		
	

		try {
			const token = await new Token().createToken(user)
			const message = await   user.createUser()
			res.status(200).json({
				message,
				token,
				userId: user.id
				}
			);
		} catch (error) {
			new Error(error as string)
		}
	}
}