// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import  { Sequelize } from 'sequelize';

export const connect = new Sequelize('loja_virtual', 'root', `${process.env.PASSWORDSQL}`, {
	host: 'localhost',
	dialect: 'mysql',
});