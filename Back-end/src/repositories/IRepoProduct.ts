import { IProducts } from '../database/models/product';
import { 	  IProductUpdate, Product } from '../entities/Product';

export interface IRepoProduct {
	create(data: Product): Promise<string | Error>
	Update(id: string, data: IProductUpdate): Promise<string | Error>
	findAll(): Promise<IProducts[] | Error>
	findByIdOwner(id: string): Promise<IProducts[]| Error>
	findById(id: string): Promise<IProducts | Error>
	delete(id: string): Promise<string | Error>
}