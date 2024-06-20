require('dotenv').config();
import { App }from "./App";
import { connect } from "./database/conn";
import { Users } from "./database/models/user";

class Server {
	private db = connect
	private user = Users;
	private app = new App();

	constructor() {
		this.Listen();
	}

	Listen() {
		this.db.sync().then(() => {
			console.log('Connect the dataBase');
			this.app.Listen(process.env.PORT)
		}).catch((err) => {
			return console.log(err);
			
		})
	}
}

const serve = new Server();