// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { App }from './App';
import { connect } from './database/conn';
import { products } from './database/models/product';
import { Users } from './database/models/user';

class Server {
	private readonly db = connect;
	private readonly user = Users;
	private readonly = products;
	private app = new App();

	constructor() {
		this.Listen();
	}

	Listen() {
		this.db.sync().then(() => {
			console.log('Connect the dataBase');
			this.app.Listen(process.env.PORT);
		}).catch((err) => {
			return console.log(err);
			
		});
	}
}

const server = new Server();