import { Request, Response } from "express";
import fs from "fs";
import ipaddr from "ipaddr.js";
import path from "path";
// import Entreprise from "../models/Entreprise.model";
const loggerMiddleware = (req: Request, resp: Response, next: () => void) => {
    const fullPath = path.resolve("public" + req.path);
    // tslint:disable-next-line: no-console
    const exist = fs.existsSync(fullPath);
    const isFont = fullPath.includes("ttf");
    const isFont2 = fullPath.includes("woff");
    const favIco = fullPath.includes("ico");
    const verif = exist || isFont || isFont2 || favIco;
    const date = new Date();
    if (!verif) {

        // const entreprise = new Entreprise();
        // entreprise.name = "entre_name";
        // entreprise.adress = "entre_adrr";
        // entreprise.save();
        // const currentLog = `USER: USERNAME ;${req.method} REQUEST; PATH:
        // ${req.path}; DATE: ${date}; IP: ${ipaddr.parse(req.ip).toString()}`;
        // fs.appendFileSync("logs/route_activity.log", `\n ${currentLog}`);
        // tslint:disable-next-line: no-console
        // console.log(entreprise.sequelize);
    }
    next();
};

export default loggerMiddleware;
