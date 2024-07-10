import { NextFunction, Request, Response } from 'express';

interface Imiddleware {
	checkToken(	 req: Request,
		res: Response,
		Next: NextFunction,)
}


export class Middlewares implements Imiddleware{


	checkToken(	 req: Request,
		res: Response,
		Next: NextFunction,){
		const authHeader = req.headers.authorization;

		if(!authHeader) return res.status(401).json('You are not authenticated');

		Next();
	}
}