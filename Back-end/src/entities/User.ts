import  { v4 }  from 'uuid';




export class User {
	public id?: string;

	public name: string;
	public email: string;
	public phone: string;
	public password: string;
	public CPF: string;

	constructor(props: Omit<User, 'id'>, id?: string) {
		Object.assign(this, props);
		if(!id) {
			this.id = v4();
		}

	}
	
}