
import { IUser, User } from '../../entities/User';
import { IRepoUser} from '../IRepoUser';
import { Users } from '../../database/models/user';
import { Token } from '../../utils/Token';
import { Request } from 'express';



export  class  UserRepository implements IRepoUser {
	private token = new Token();

	constructor(private model = Users ) {}



	async create(data: User): Promise<string | Error> {

		const userExist = await this.findByEmail(data.email);
		
		if(userExist != null) {
			throw new Error('User already exist');
		}
		try {
			const user = new User(data); 
			const saveUser = await this.model.create(user);
			const token = this.token.createToken(saveUser);

			return token;		
		} catch (error) {
			throw new Error('Unable to create user check the fields');
		}
			
	}
	
	async findById(id: string): Promise<User | Error> {
		const alreadyUser = await this.model.findOne({ where: { id: id}});

		if(!alreadyUser)  throw new Error('User not found');

		return alreadyUser;
	}

	async findByEmail(email: string): Promise<null | User> {
		
		const alreadyUser = await this.model.findOne({where: {email: email}});
		return alreadyUser;
	
		
	}

	async Login(email: string) {
		const userExist =  await this.findByEmail(email);

		if(!userExist) throw new Error('User not exist');

		const createToken = this.token.createToken(userExist);
		
		return {
			user: userExist,
			token: createToken
		};
	}

	async Update(req: Request, data: IUser): Promise<string | Error> {

		const token = this.token.getToken(req);
		
		const id  = this.token.getIdByToken(token);
		const userExist = await this.findById(id);

		if(!userExist) throw new Error('User not exist');

		console.log(data.email.length);
		
		
		try {
			await this.model.update(data, {where: { id: id}});
			return 'Update success';
		} catch (error) {
			return error;
			
		}
	}

	async Delete(email: string): Promise<string | Error> {
		const user = await this.findByEmail(email);
		
		if(!user) throw new Error('User not exist');

		return 'User Exist';
		
	}
}