import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { connect } from '../conn';

export interface IProducts extends Model<InferAttributes<IProducts>, InferCreationAttributes<IProducts>>{
	id: string,
	name: string,
	description: string,
	price: number
}

export const products = connect.define<IProducts>('products', {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING
	},
	description: {
		type: DataTypes.STRING
	},
	price: {
		type: DataTypes.FLOAT
	}
});


