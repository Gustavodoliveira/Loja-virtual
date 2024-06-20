require('dotenv').config();
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import route from './routes/userRoutes';

const CorsOptions = {
	credentials: true,
	origin: '*'
};


export class App {
	public app: Application

	constructor() {
		this.app = express();
		this.Config();
	}

	Config() {
		this.app.use(express.json());
		this.app.use(cors(CorsOptions));
		this.app.use(helmet())
		this.app.use('/user', route)
	}



	Listen(port: undefined | String){
		this.app.listen(port, () => {
			console.log('Server is Running');
		})
	}
}

//export const app = express();
//app.use(express.json())
//app.use(cors(CorsOptions));
//app.use(helmet());

////routes

//app.use('/user', route)



