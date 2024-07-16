import { v4 } from 'uuid';

export class Product  {
	public id: string;

	public name: string;
	public description: string;
	public price: number;
	//public images: File[];

	constructor(props: Omit<Product, 'id'>, id?: string) {
		this.name = props.name;
		this.description = props.description;

		if(!id){
			this.id = v4();
		}
	}
}