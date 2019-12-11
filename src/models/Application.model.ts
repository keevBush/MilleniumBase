import { DataTypes } from "sequelize";
import { Model} from "sequelize-typescript";
import {sequelize} from "../Database/Db";
class Application extends Model {

}

Application.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {sequelize, tableName: "applications"});

export default Application;
