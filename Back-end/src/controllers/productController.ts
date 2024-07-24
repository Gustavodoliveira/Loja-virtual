import { IRepoProduct } from '../repositories/IRepoProduct';
import { ProductRepository } from '../repositories/repos/ProductRepo';
import { Request, Response } from 'express';
import { Product } from '../entities/Product';

export class ProductController {
	private static repo: IRepoProduct = new ProductRepository();

	static async create(req: Request, res: Response) {
		const { name, description, price } = req.body;

		if(!name) return res.status(400).json('name is required');
		if(!description) return res.status(400).json('description is required');
		if(!price) return res.status(400).json('price is required');
		
		const product = new Product({name,description, price});
		
		try {
			const resp = await  ProductController.repo.create(product);

			res.status(200).json({resp});
		} catch (error) {
			res.status(500).json(error.message);
		}

	}

	static async findAllProducts(req: Request, res: Response) {
		try {
			const products = await ProductController.repo.findAll();
			return res.status(200).json(products);
		} catch (error) {
			return res.status(500).json(error.message);
		}
		
	}

	static async findByIdProduct(req:Request, res: Response) {
		const { id } = req.body;
		

	
		
		try {
			const product = await ProductController.repo.findById(id);
			return res.status(200).json(product);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async Update(req: Request, res: Response) {
		const { id, name, description, price  } = req.body;



		try {
			const resp = await ProductController.repo.Update(id, {
				name,
				description,
				price
			});
			res.status(200).json({resp});
		} catch (error) {
			res.status(404).json(error.message);
			
		}
	}

	static async Delete(req: Request, res: Response) {
		const { id } = req.body;

		try {
			const resp = await ProductController.repo.delete(id);
			res.status(200).json({resp});
		} catch (error) {
			res.status(404).json(error.message);
		}
	}
}