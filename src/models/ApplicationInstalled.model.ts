import { DataTypes } from "sequelize";
import { Model } from "sequelize-typescript";
import {sequelize} from "../Database/Db";
import Application from "./Application.model";
import Entreprise from "./Entreprise.model";

class ApplicationInstalled extends Model {

}

ApplicationInstalled.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {sequelize, tableName: "application_installed"});
ApplicationInstalled.belongsTo(Entreprise, {targetKey: "id"});
ApplicationInstalled.belongsTo(Application, {targetKey: "id"});

export default ApplicationInstalled;
