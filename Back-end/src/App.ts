require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connect } from './db/Conn';

const CorsOptions = {
	credentials: true,
	origin: '*'
};

const app = express();

app.use(cors(CorsOptions));
app.use(helmet());
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


