
import { User } from '../../entities/User';
import { IRepoUser } from '../IRepoUser';
import { Users } from '../../database/models/user';

export  class  UserRepository implements IRepoUser {

	constructor(private model = Users ) {}

 async create(data: User): Promise<string | Error> {

		const userExist = await this.findByEmail(data.email)
		
			if(userExist != null) {
			 throw new Error('User already exist');
			}

		const user = new User(data) 
		this.model.create(user)
		return 'create user success'			
	}

	findByEmail(email: string): Promise<null | User> {
			const alreadyUser = this.model.findOne({where: {email: email}})
			return alreadyUser
	}
}