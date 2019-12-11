import { DataTypes } from "sequelize";
import { Model } from "sequelize-typescript";
import {sequelize} from "../Database/Db";
import Application from "./Application.model";
import Entreprise from "./Entreprise.model";

class Deploy extends Model {

}

Deploy.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    version: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    majorVersion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reviewVersion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    path: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {sequelize, tableName: "deploies"});
Deploy.belongsTo(Application, {targetKey: "id"});

export default Deploy;
