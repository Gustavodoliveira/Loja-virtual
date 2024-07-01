import { User } from '../entities/User';

export interface IRepoUser {
	create(data: User): Promise<string | Error>
	findByEmail(email: string): Promise<User | null>
	Login(email: string, password: string)
}