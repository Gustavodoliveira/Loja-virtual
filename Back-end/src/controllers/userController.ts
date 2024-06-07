import { Request, Response } from "express";
import createId from "../utils/createId";
import { Token } from "../utils/createToken";
import { UserModel, Users } from '../db/models/ModelUser';

export class UserController {
	static async createUser(req: Request, res: Response) {
		const { name, cpf, phone } = req.body


		if(!name) return res.status(401).json('name is required')
		if(!cpf) return res.status(401).json('cpf is required')
		if(!phone) return res.status(401).json('phone is required')

		const newId  = createId()


		const userExist = await Users.findOne({where: { cpf: cpf}})
		
		if(userExist) res.status(401).json({message: 'Cpf already exist try another'});
		
	

		try {
			const user = await Users.create({
				cpf,
				id: newId,
				name,
				phone
			})
			const token = await new Token().createToken(user)
			res.status(200).json({
				message: 'Register Success',
				token,
				userId: user.id
				}
			);
		} catch (error) {
			new Error(error as string)
		}
	}

	static async Login(req: Request, res: Response) {

	}
}