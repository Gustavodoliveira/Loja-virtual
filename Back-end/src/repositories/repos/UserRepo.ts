
import { User } from '../../entities/User';
import { IRepoUser } from '../IRepoUser';
import { Users } from '../../database/models/user';

export  class  UserRepository implements IRepoUser {

	constructor(private model = Users ) {}

	async create(data: User): Promise<string | Error> {
			const userExist = await this.findByEmail(data.email)

			if(userExist != null) return new Error('User already exist')

			this.model.create(data)
			return 'create user success'
	}

	findByEmail(email: string): Promise<null | User> {
			const alreadyUser = this.model.findOne({where: {email: email}})
			return alreadyUser
	}
}