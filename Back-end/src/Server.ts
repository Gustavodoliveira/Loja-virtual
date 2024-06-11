require('dotenv').config();
import { connect } from "./db/Conn";
import { App }from "./App";
import { Company } from "./db/models/ModelCompany";
import { Users } from "./db/models/ModelUser";


const user = Users;
const company = Company;
const app = new App()


connect.sync()
	.then(() => {
		console.log('Connect the dataBase');
		app.Listen(process.env.PORT);
	})
	.catch((err) => {
		return "Deu Erro"
	})