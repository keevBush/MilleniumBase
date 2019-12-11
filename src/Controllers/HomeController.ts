import * as express from "express";
import {Request, Response} from "express";
import fs from "fs";

class HomeController  {
    public router = express.Router();
    private basePath = "";
    constructor() {

        this.initRoutes();
    }
    public initRoutes() {
        this.router.get(this.basePath + "/dashboard", this.dashboard);
        this.router.get(this.basePath + "/apps", this.apps);
    }

    public dashboard = (req: Request, res: Response) => {
        const data = fs.readdirSync("views");
        res.render("dashboard/index", {apps : data});
    }
    public apps = (req: Request, res: Response) => {
        const data = fs.readdirSync("views");
        res.render("home/apps", {apps : data});
    }
}

export default HomeController;
