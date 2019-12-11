import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const dataBaseConfig = {
      development: {
        url: process.env.DATABASE_STRING,
        dialect: process.env.DIALECT ,
      },
      test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: process.env.DIALECT ,
        // dialect: "postgres",
      },
      production: {
        url: process.env.DATABASE_URL,
        dialect: process.env.DIALECT ,
        // dialect: "postgres",
      },
} ;

export {dataBaseConfig, port};
