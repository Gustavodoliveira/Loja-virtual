import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { connect } from "../Conn";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
	name: string
	cpf: string;
	phone: string;

}

export const Users = connect.define<UserModel>('users', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	 },
	 cpf: {
		type: DataTypes.STRING,
		allowNull: false
	 },
	 phone: {
		type: DataTypes.STRING,
		allowNull: false
	 }
	
	})