import { IRepoProduct } from '../repositories/IRepoProduct';
import { ProductRepository } from '../repositories/repos/ProductRepo';
import { Request, Response } from 'express';

export class ProductController {
	private static repo: IRepoProduct = new ProductRepository();

	static async create(req: Request, res: Response) {
		const { name, description, price } = req.body;

		if(!name) return res.status(400).json('name is required');
		if(!description) return res.status(400).json('description is required');
		if(!price) return res.status(400).json('price is required');

	}

}