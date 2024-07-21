import { v4 } from 'uuid';

export interface IProduct {
	name: string
	description: string
	price: number
}
export class Product  {
	public id?: string;

	public name: string;
	public description: string;
	public price: number;
	public userId?: string;
	//public images: File[];

	constructor(props: Omit<Product, 'id'>, id?: string) {
		Object.assign(this, props);

		if(!id){
			this.id = v4();
		}
	}
}