import * as express from "express";
import {Request, Response} from "express";

class SettingController {

    public router = express.Router();
    private basePath = "/settings/";

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(`${this.basePath}users/`, this.usersConfigs);
    }

    public usersConfigs = (req: Request, res: Response) => {
        const routes = [{
            method: "GET",
            name: "List of user",
            path: "/users"
        },
        {
            method: "POST",
            name: "New user",
            path: "/users/new",

        },
        {
            method: "DELETE",
            name: "Delete user",
            path: "/users/delete"
        }];
        const users = [
            {
                username: "username 1"
            },
            {
                username: "username 2"
            },
            {
                username: "username 3"
            },
            {
                username: "username 4"
            }
        ];
        res.render("settings/roles_attribution", {routes, users});
    }
}

export default SettingController;
