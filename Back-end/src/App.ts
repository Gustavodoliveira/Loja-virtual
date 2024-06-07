require('dotenv').config();
import express from 'express';
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

const user = Users;
const company = Company;

const app = express();
app.use(express.json())
app.use(cors(CorsOptions));
app.use(helmet());

//routes

app.use('/user', route)

connect.sync()
	.then(() => {
		
		console.log('Connect the dataBase');
		app.listen(process.env.PORT, () => {
		console.log('Server is runnig');
});
	})
	.catch((err) => {
		console.log(err);
		
	})


