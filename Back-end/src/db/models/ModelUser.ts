import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { connect } from "../Conn";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
	id: string
	name: string
	cpf: string;
	phone: string;
	password: string

}

export const Users = connect.define<UserModel>('users', {
	id: {
		type: DataTypes.STRING,
		unique: true,
		primaryKey: true,
		allowNull: false,
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
	 cpf: {
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
	 password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len:  {
				args: [1, 30],
				msg: 'Campo não pode ficar vazio'
			}
		}
	 }
	
	})