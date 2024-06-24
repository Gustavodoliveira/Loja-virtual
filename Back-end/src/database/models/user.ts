import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { User } from "../../entities/User";
import { connect } from "../conn";

export interface ModelUser extends Model<InferAttributes<ModelUser>, InferCreationAttributes<ModelUser>> {
	name: string, 
	email: string,
	phone: string,
	password: string,
	CPF: string
}

export const Users = connect.define<ModelUser>('users', {

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
			args: [1, 11],
			msg: 'Campo deve conter entre 1 e 11 characters'
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