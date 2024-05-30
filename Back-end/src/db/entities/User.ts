import { DatabaseError, where } from "sequelize";
import { UserModel, Users } from "../models/ModelUser";

export class User {
	public id!: string
	public name: string
	public Cpf: string
	public phone: string
	//public Cnpj: string
	//private Company: string
 
	constructor(name: string, cpf: string, phone: string, id :string) {
		this.id = id
		this.name = name;
		this.Cpf = cpf;
		this.phone = phone
	}

	async findUser(){
			return await Users.findOne({where:  {cpf: this.Cpf}})
	}

	//showUser() :string {
		
	//}

	async createUser() : Promise<string | void> {
	
		return await Users.create({
			id: this.id,
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