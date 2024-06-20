
import { uuid } from "uuidv4"

export class User {
	private readonly id?: string

	public name: string;
	public email: string;
	public phone: string;
	public password: string;
	public CPF: string;

	constructor(props: Omit<User, "id">, id?: string) {
		Object.assign(this, props)

		if(!this.id) {
			this.id = uuid();
		}
	}
	
}