import { DataTypes } from "sequelize";
import { Model } from "sequelize-typescript";
import {sequelize} from "../Database/Db";
import Entreprise from "./Entreprise.model";
import User from "./User.model";
class UserEntreprise extends Model {
    public id!: number;
    public idEntreprise: number;
    public idUser: number;
    public date: Date;
}

UserEntreprise.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE
    }
}, {sequelize, tableName: "user_entreprises"} );

UserEntreprise.belongsTo(User, {targetKey: "id"});
UserEntreprise.belongsTo(Entreprise, {targetKey: "id"});

export default UserEntreprise;
