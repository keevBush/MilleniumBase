import { Sequelize } from "sequelize-typescript";
import {dataBaseConfig} from "../Configs/configs";
class Db {
    public sequilize: Sequelize;
    private connectionString: string;
    constructor() {
        this.connectionString = dataBaseConfig.development.url;
        this.sequilize = new Sequelize(this.connectionString);
        // const models = [Entreprise];
        // this.initModels(models);
    }

    public initModels = (params: any[]) => {
        this.sequilize.addModels(params);
    }
}

const sequelize = new Sequelize(dataBaseConfig.development.url);

export  {Db, sequelize};
