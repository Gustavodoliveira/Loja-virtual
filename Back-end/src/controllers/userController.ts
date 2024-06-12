import { Request, Response } from "express";
import createId from "../utils/createId";
import { Token } from "../utils/createToken";
import { UserModel, Users } from '../db/models/ModelUser';

export class UserController {
	static async createUser(req: Request, res: Response) {
		const { name, cpf, phone, password, confirmPassword } = req.body


		if(!name) return res.status(401).json({ message: 'name is required'})
		if(!cpf) return res.status(401).json({ message: 'cpf is required'})
		if(!phone) return res.status(401).json({ message: 'phone is required'})
		if(!password) return res.status(401).json({message: 'password is required'})
		if(!confirmPassword) return res.status(401).json({message: 'Confirm password is required}'})
		
		if(password != confirmPassword) return res.status(401).json({message: 'You password is different confirm password'})


		const newId  = createId()

		
		const userExist = await Users.findOne({where: { cpf: cpf}})
		
		if(userExist) res.status(401).json({message: 'Cpf already exist try another'});
		
	

		try {
			const user = await Users.create({
				cpf,
				id: newId,
				name,
				phone,
				password
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