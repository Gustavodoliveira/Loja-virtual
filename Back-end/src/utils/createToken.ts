require('dotenv').config();
import  Jwt, { JsonWebTokenError }  from "jsonwebtoken";
import { UserModel } from "../db/models/ModelUser";

export class Token {
	private secret: string  = process.env.SECRET as string

	async createToken(user: UserModel, ) {
		try {
			const token = Jwt.sign({
			Id: user.id
		}, `${this.secret}`)
			return token

		} catch (error) {
			new JsonWebTokenError('Error in create token')
		} 
	}
}