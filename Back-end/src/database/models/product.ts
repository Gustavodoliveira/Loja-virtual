import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { connect } from '../conn';

export interface IProducts extends Model<InferAttributes<IProducts>, InferCreationAttributes<IProducts>>{
	id: string,
	name: string,
	description: string,
	price: number
	owner: string
}



export const products =  connect.define<IProducts>('products', {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	owner: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	}
});



