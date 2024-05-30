import { UserModel } from "../models/ModelUser"

export class Company {
	public cnpj: string
	public name : string
	public owner: UserModel

	constructor(cnpj: string, name: string, owner: UserModel) {
		this.name = name
		this.owner = owner
		this.cnpj = cnpj

	}
}