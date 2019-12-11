import { DataTypes } from "sequelize";
import { Model } from "sequelize-typescript";
import {sequelize} from "../Database/Db";
import Entreprise from "./Entreprise.model";
class DocumentVerification extends Model {

}

DocumentVerification.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {sequelize, tableName: "documents_verification"});
DocumentVerification.belongsTo(Entreprise, {targetKey: "id"});

export default DocumentVerification;
