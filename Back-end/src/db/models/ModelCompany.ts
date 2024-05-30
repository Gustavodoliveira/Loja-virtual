import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { UserModel, Users } from "./ModelUser";
import { connect } from "../Conn";

export interface CompanyModel extends Model<InferAttributes<CompanyModel>, InferCreationAttributes<CompanyModel>> {
	cnpj: string
	name: string
	ownerId: string
}

export const Company = connect.define<CompanyModel>('company',{
	cnpj: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: { 
		type: DataTypes.STRING,
		allowNull: false
	},
	ownerId: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
		references: {
			 model: 'users',
			 key: 'id'
		}
}
		
	}
)

Company.belongsTo(Users);
