import { Product } from '../entities/Product';

export interface IRepoProduct {
	create(data: Product): Promise<string | Error>
}