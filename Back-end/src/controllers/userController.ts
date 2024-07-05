import { Request, Response, } from 'express';
import { UserRepository } from '../repositories/repos/UserRepo';
import { Validate } from '../utils/Validate';
import bcrypt from 'bcrypt';
import { User } from '../entities/User';

export class UserController {
	private static rounds = 12;
	private static repo: UserRepository = new UserRepository();
	private static validate = new Validate();
	constructor() {
	}

	static async create(req: Request, res: Response) {
		const { name, email, phone, password, confirmPassword, CPF} = req.body;

		if(!name) return res.status(400).json('Name is Required');
		if(!email) return res.status(400).json('E-mail is Required');
		if(!phone) return res.status(400).json('Phone is Required');
		if(!CPF) return res.status(400).json('CPF is Required');
		if(!password) return res.status(400).json('Password is Required');

		if(!UserController.validate.isEmail(email)) return res.status(400).json('E-mail is not valid');
		if(!UserController.validate.isPassword(password)) return res.status(400).json('The password must contain at least one digit, one uppercase letter, one lowercase letter, one special character and at least 8 of the characters mentioned.');

		if(password != confirmPassword) return res.status(400).json('Password is different Confirm Password');
      
		

	

		const passwordHash = await bcrypt.hash(password, UserController.rounds);

		try {
			const resp =  await UserController.repo.create({
				name, email, phone, password: passwordHash, CPF
			});
			return res.status(201).json(resp);
		} catch (error) {
			return res.status(400).json(error?.message);
			
		}
	}

	static async Login(req: Request, res: Response) {
		
		const { email, password} = req.body;

		try {
			
			const user = await UserController.repo.Login(email);
	
			const checkPassword = await bcrypt.compare(password, user.password);
	
			if(!checkPassword) return res.status(403).json('Password is incorrect');
			
			return res.status(200).cookie('isLogged', {
				authenticated: true,
				user: user.email
			}).json('Login Success');
		} catch (error) {
			return res.status(406).json(error.message);
		}
	}	
	
	static async Update(req: Request, res: Response) {
		const { email, newEmail  } = req.body;
		try {
			const userExist = await UserController.repo.findByEmail(email);

			const something = await UserController.repo.Update(userExist, {
				email: newEmail,
				name: userExist.name,
				phone: userExist.phone,
				password: userExist.password,
				CPF: userExist.CPF
			});

			console.log(something);
		} catch (error) {
			console.log(error.message);
			
		}
	}

	static async Delete(req: Request, res: Response){
		const { email } = req.body;
		try {
			const user = UserController.repo.Delete(email);
			console.log(user);
			
		} catch (error) {
			console.log(error.message);
		}
	}
		
}