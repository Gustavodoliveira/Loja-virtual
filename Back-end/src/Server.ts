require('dotenv').config();
import { connect } from "./db/Conn";
import { App }from "./App";
import { Company } from "./db/models/ModelCompany";
import { Users } from "./db/models/ModelUser";

class Server {
	private db = connect
	private user = Users;
	private company = Company;
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