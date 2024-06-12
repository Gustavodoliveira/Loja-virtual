require('dotenv').config();
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connect } from './db/Conn';
import { UserModel, Users } from './db/models/ModelUser';
import route from './routes/UserRoutes';
import { CompanyModel ,Company } from './db/models/ModelCompany';

const CorsOptions = {
	credentials: true,
	origin: '*'
};


export class App {
	public app: Application

	constructor() {
		this.app = express();
		this.Config();
		this.Routes();
	}

	Config() {
		this.app.use(express.json());
		this.app.use(cors(CorsOptions));
		this.app.use(helmet())
	}

	Routes() {
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



