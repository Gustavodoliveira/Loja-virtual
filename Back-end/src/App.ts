// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import route from './routes/userRoutes';
import session from 'express-session';

const store = new session.MemoryStore();

const CorsOptions = {
	credentials: true,
	origin: '*'
};


export class App {
	public app: Application;

	constructor() {
		this.app = express();
		this.Config();
	}

	Config() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: true}));
		this.app.use(session({
			secret: process.env.SECRETCOOKIE,
			resave: false,
			saveUninitialized: false,
			cookie: { maxAge: 24 * 60 * 60 * 1000, secure: true, signed: true },
			store
		}));
		this.app.use(cors(CorsOptions));
		this.app.use(helmet());
		this.app.use('/user', route);
	}



	Listen(port: undefined | string){
		this.app.listen(port, () => {
			console.log('Server is Running');
		});
	}
}

//export const app = express();
//app.use(express.json())
//app.use(cors(CorsOptions));
//app.use(helmet());

////routes

//app.use('/user', route)



