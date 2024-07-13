import jwt, { JwtPayload } from 'jsonwebtoken';
import { ModelUser } from '../database/models/user';
import { User } from '../entities/User';
import { Request } from 'express';

interface IModelToken extends JwtPayload {
	id?: string
} 




interface IToken {
	createToken(user: ModelUser): string | Error
	getToken(req: Request): string
	getIdByToken(token: string): string 
}
export class Token implements IToken{
	private jwt = jwt;

	constructor(){}

	createToken(user: User): string | Error {
		const token = this.jwt.sign({
			id: user.id
		}, `${process.env.JWTSECRET}`);
		return token;
	}

	getToken(req: Request): string {
		const authHeader = req.headers.authorization;

		const token = authHeader && authHeader.split(' ')[1];

		if(!token) throw new Error('Token not found');

		return token;
	}

	getIdByToken(token: string): string  {
		const decoded  = jwt.verify(token, `${process.env.JWTSECRET}`) as IModelToken; 
		const  id    = decoded.id;
		console.log(decoded);
		

		return id;
	}

}