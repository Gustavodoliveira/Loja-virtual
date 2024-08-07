import { v4 } from 'uuid';

//TODO: @Gustavodoliveira create order item
export interface IProductUpdate {
	name: string
	description: string
	price: number
}
export class Product  {
	public id?: string;

	public name: string;
	public description: string;
	public price: number;
	public owner: string;
	//public images: File[];

	constructor(props: Omit<Product, 'id'>, id?: string) {
		Object.assign(this, props);

		if(!id){
			this.id = v4();
		}
	}
}