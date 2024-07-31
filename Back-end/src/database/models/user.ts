import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { connect } from '../conn';
import { products } from './product';

export interface ModelUser extends Model<InferAttributes<ModelUser>, InferCreationAttributes<ModelUser>> {
	id: string
	name: string, 
	email: string,
	phone: string,
	password: string,
	CPF: string
}

export const Users = connect.define<ModelUser>('users', {
	id: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len:  {
				args: [1, 30],
				msg: 'Campo não pode ficar vazio'
			}
		}
	},
	CPF: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len:  {
				args: [1, 11],
				msg: 'Campo deve conter entre 1 e 11 characters'
			}
		}
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len:  {
				args: [1, 10],
				msg: 'Campo deve conter entre 1 e 10 caracteres'
			}
		}
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len:  {
				args: [1, 30],
				msg: 'Campo deve conter entre 1 s 20 characters'
			}
		}
	},

	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len:  {
				args: [1, 200],
				msg: 'Campo não pode ficar vazio'
			}
		}
	},

});

Users.hasMany(products, {
	as: 'products',
	foreignKey: 'owner'
});
