import { products } from '../../database/models/product';
import { Product } from '../../entities/Product';
import { IRepoProduct } from '../IRepoProduct';

export class ProductRepository implements IRepoProduct {
	constructor(private model = products) {}
	async create(data: Product): Promise<string | Error> {
		try {
			const product = new Product(data);
			const save = await  this.model.create(product);

			return 'product create success';
		} catch (error) {
			throw new Error(error);
		}
			
	}
}