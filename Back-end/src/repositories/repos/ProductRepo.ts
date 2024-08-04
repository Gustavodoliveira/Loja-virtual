import { IProducts, products } from '../../database/models/product';
import {   IProductUpdate, Product } from '../../entities/Product';
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
	async Update(id: string, data: IProductUpdate): Promise<string | Error> {
		
		
		try {
			const productExist =  await this.findById(id);
			if(!productExist) throw new Error();

			await this.model.update(data, {where: { id: id}});
			return 'Update success';
		} catch (error) {
			throw new Error('Product not exist');
		}
	}

	async delete(id: string): Promise<string | Error> {
		try {
			const productExist = await this.findById(id);
			if(!productExist) throw new Error();

			await this.model.destroy({where: { id: id }});
			return 'Product delete success';
		} catch (error) {
			throw new Error('Product not exist');
		}
			
	}

	async findAll(): Promise<IProducts[] | Error> {
		try {
			const allProducts = await this.model.findAll();

			return allProducts;
		} catch (error) {
			throw new Error(error.message);
		}
			
	}  

	async findByIdOwner(id: string): Promise<IProducts[] | Error> {
		try {
			const products = await this.model.findAll({where: { owner: id}});
			return products;
		} catch (error) {
			throw new Error('Error');
		}
	}

	async findById(id: string): Promise<IProducts | Error> {
		try {
			const product = await this.model.findOne({ where: { id: id}});

			return product;
		} catch (error) {
			throw new Error('Product not exist');
		}
		
			
	}
}