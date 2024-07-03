
import { User } from '../../entities/User';
import { IRepoUser } from '../IRepoUser';
import { ModelUser, Users } from '../../database/models/user';

export  class  UserRepository implements IRepoUser {

	constructor(private model = Users ) {}



	async create(data: User): Promise<string | Error> {

		const userExist = await this.findByEmail(data.email);
		
		if(userExist != null) {
			throw new Error('User already exist');
		}

		const user = new User(data); 
		this.model.create(user);
		return 'create user success';			
	}

	async findByEmail(email: string): Promise<null | User> {
		
		const alreadyUser = await this.model.findOne({where: {email: email}});

		return alreadyUser;
	
		
	}

	async Login(email: string) {
		const userExist =  await this.findByEmail(email);

		if(!userExist) throw new Error('User not exist');
		return userExist;
	}

	async Update(email: string): Promise<User | Error> {
		const user = await this.findByEmail(email);

		if(!user) throw new Error('User not exist'); 
		
		return user;
	}

	async Delete(email: string): Promise<string | Error> {
		const user = await this.findByEmail(email);
		
		if(!user) throw new Error('User not exist');

		return 'User Exist';
		
	}
}