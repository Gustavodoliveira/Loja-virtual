
import { IUser, User } from '../entities/User';
import { Request } from 'express';
export interface  IsuccessMethod {
	id: string
}

export interface IRepoUser {
	create(data: User): Promise<string | Error>
	findById(id: string): Promise<User | Error>
	findByEmail(email: string): Promise<null | User>
	Login(email: string, password: string): Promise<unknown | Error>
	Update(req: Request, data: IUser): Promise<string | Error>
	Delete(req: Request): Promise<string | Error>
}