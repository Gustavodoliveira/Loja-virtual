import { UUID } from "sequelize";
import { UUIDV4 } from "sequelize";
import { uuid as v4 } from "uuidv4";



export class User {
	private readonly id?: string

	public name: string;
	public email: string;
	public phone: string;
	public password: string;
	public CPF: string;

	constructor(props: Omit<User, "id">, id?: string) {
		Object.assign(this, props)

	}
	
}