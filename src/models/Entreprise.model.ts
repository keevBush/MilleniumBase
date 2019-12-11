import { DataTypes } from "sequelize";
import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {Db, sequelize} from "../Database/Db";
import User from "./User.model";
import UserEntreprise from "./UserEntreprise.model";

class Entreprise extends Model {
    @Column({
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    })
    public id!: number;
    //////////////////////
    @Column({
        type: DataTypes.STRING,
    })
    public name: string;
    //////////////////////
    @Column({
        type: DataTypes.STRING,
    })
    public adress: string;
    //////////////////////
    @Column({
        type: DataTypes.STRING,

    })
    public logo: string;
    //////////////////////
    @Column({
        type: DataTypes.STRING,
    })
    public phone: string;
    //////////////////////
    @Column({
        type: DataTypes.STRING,
    })
    public email: string;
    //////////////////////
    @Column({
        type: DataTypes.STRING,
    })
    public pwd: string;
    //////////////////
    @Column({
        type: DataTypes.STRING,
    })
    public rememberToken: string;
    //////////////////////
    @Column({
        type: DataTypes.STRING,
    })
    public verificationCode: string;
    /////////////
    @Column({
        type: DataTypes.BOOLEAN,
    })
    public isVerified: boolean;
    //////////////////////
    @Column({
        type: DataTypes.DATE,
    })
    public createdAt: Date;
    //////////////////////
    @Column({
        type: DataTypes.DATE,
    })
    public updatedAt: Date;

    // Relationships
    // @HasMany(() => User)
    // public users: User[];
}

Entreprise.init( {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    logo: {
        type: DataTypes.STRING,
        allowNull: true,
    }
    ,
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    pwd: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    rememberToken: {
        type: DataTypes.STRING,
        allowNull: true,
    }
    ,
    verificationCode: {
        type: DataTypes.STRING,
        allowNull: true,
    }
    ,
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
//     ,
//     createdAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     }
//     ,
//     updatedAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//  }
},
{
    sequelize,
    tableName: "entreprises"
});

export default Entreprise ;
