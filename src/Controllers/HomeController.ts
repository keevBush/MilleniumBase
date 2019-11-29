import * as express from "express";
import {Request, Response} from "express";

class HomeController  {
    public router = express.Router();
    constructor() {

        this.initRoutes();
    }
    public initRoutes() {
        this.router.get("/dashboard", this.index);
    }

    public index = (req: Request, res: Response) => {
        res.render("dashboard/index");
    }

}

export default HomeController;
