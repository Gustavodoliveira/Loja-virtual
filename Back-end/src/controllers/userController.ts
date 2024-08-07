import { Request, Response, } from 'express';
import { UserRepository } from '../repositories/repos/UserRepo';
import { Validate } from '../utils/Validate';
import bcrypt from 'bcrypt';

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

		let image = '';

		if(req.file) {
			image = req.file.filename;
			console.log(image);
			
		}



		try {
			const resp =  await UserController.repo.create({
				name, email, phone, password: passwordHash, CPF, imageUrl: image
			});

	

			return res.status(200).cookie('isLogged', {
				authenticated: true,
			}).json({
				message: 'User create success',
				token: resp
			});

		} catch (error) {
			return res.status(400).json(error?.message);
			
		}
	}

	static async Login(req: Request, res: Response) {
		
		const { email, password} = req.body;

		try {
			
			const resp = await UserController.repo.Login(email);
			
			const checkPassword = await bcrypt.compare(password, resp.user.password);
			
			if(!checkPassword) return res.status(403).json('Password is incorrect');
			
			
			return res.status(200).cookie('isLogged', {
				authenticated: true,
			}).json({
				message: 'Login Success',
				token: resp.token
			});
		} catch (error) {
			return res.status(406).json(error.message);
		}
	}	
	
	static async Update(req: Request, res: Response) {
		const { name, email, phone, password, confirmPassword } = req.body;

		if(password != confirmPassword) return res.status(400).json('Password is different Confirm Password');
		
		let passwordHash: string;
		if(password) {
			passwordHash = await bcrypt.hash(password, UserController.rounds);

		}
		
		try {
			const resp = await UserController.repo.Update(req, {
				name: name,
				email: email,
				phone: phone, 	
				password: passwordHash
			});

			res.status(200).json(resp);
		} catch (error) {
			res.status(400).json(error);
			
		}
	}

	static async Delete(req: Request, res: Response){
	
		try {
			const resp = await UserController.repo.Delete(req);
			
			res.status(200).json(resp);
			
		} catch (error) {
			res.status(400).json(error.message);
		}
	}
		
}