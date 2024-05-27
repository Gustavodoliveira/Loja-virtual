import { DatabaseError } from "sequelize";
import { Users } from "../models/ModelUser";

export class User {
	public name: string
	public Cpf: string
	public phone: string
	//public Cnpj: string
	//private Company: string

	constructor(name: string, cpf: string, phone: string) {
		this.name = name;
		this.Cpf = cpf;
		this.phone = phone
	}

	showUser() :string {
		return this.name
	}

	createUser() : Promise<string | void> {
		return Users.create({
			name: this.name,
			cpf: this.Cpf,
			phone: this.phone
		})
			.then(() => {
				return 'User create success';
			})
			.catch((err) => {
				new Error(err)
			})
	}
}