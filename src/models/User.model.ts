import { DataTypes } from "sequelize";
import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {Db, sequelize} from "../Database/Db";
class User extends Model {
    public id!: number;
    public fullname: string;
    public username: string;
    public email: string;
    public pwd: string;
    public phone: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pwd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {sequelize, tableName: "users"});
export default User;
