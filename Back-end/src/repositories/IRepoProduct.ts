import { 	 IProduct, Product } from '../entities/Product';

export interface IRepoProduct {
	create(data: Product): Promise<string | Error>
	Update(id: string, data: IProduct): Promise<string | Error>
	findAll(): Promise<Product[] | Error>
	findByIdOwner(id: string): Promise<Product[] | Error>
	findById(id: string): Promise<Product | Error>
	delete(id: string): Promise<string | Error>
}