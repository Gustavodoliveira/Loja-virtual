import { User } from '../entities/User';

export interface IRepoUser {
	create(data: User): Promise<string | Error>
	findByEmail(email: string): Promise<null | User>
	Login(email: string, password: string): Promise<User | Error>
	Update(email: string): Promise<User | Error>
	Delete(email: string): Promise<string | Error>
}