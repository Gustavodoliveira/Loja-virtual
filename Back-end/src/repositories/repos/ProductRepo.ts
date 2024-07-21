import { products } from '../../database/models/product';
import {  Product } from '../../entities/Product';
import { Token } from '../../utils/Token';
import { IRepoProduct } from '../IRepoProduct';

export class ProductRepository implements IRepoProduct {
	private token = new Token();

	constructor(private model = products) {}
	async create(data: Product): Promise<string | Error> {
		try {
			const product = new Product(data);
			await  this.model.create(product);

			return 'product create success';
		} catch (error) {
			throw new Error(error);
		}
			
	}
	//Update(id: string, data: IProduct): Promise<string | Error> {
			
	//}

	//delete(): Promise<string | Error> {
			
	//}

	async findAll(): Promise<Product[] | Error> {
		try {
			const allProducts = await this.model.findAll();

			return allProducts;
		} catch (error) {
			throw new Error(error.message);
		}
			
	}  

	async findById(id: string): Promise<Product | Error> {
		try {
			const product = await this.model.findOne({ where: { id: id}});

			return product;
		} catch (error) {
			throw new Error(error.message);
		}
		
			
	}
}