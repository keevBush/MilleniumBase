import * as express from "express";
import {Request, Response} from "express";
import fs from "fs";
class StoreController {

    public router = express.Router();
    private basePath = "/store/";

    constructor() {
        this.initRoute();
    }

    private initRoute() {
        this.router.get(this.basePath + "", this.store);
        this.router.get(this.basePath + "apps/:id", this.app);
    }

    private store = (req: Request, res: Response) => {
        res.render("store/index");
    }

    private app = (req: Request, res: Response) => {
        res.send("app view");
    }

    private search = (req: Request, res: Response) => {
        res.send("search view");
    }
}
export default StoreController;
