import { Request, Response } from "express";
import * as express from "express";
import session from "express-session";
class LoginController {
    private router = express.Router();
    constructor() {
        this.initRoute();
    }
    public initRoute = () => {
        this.router.get("/entreprise/login", this.loginView);
        this.router.get("/entreprise/sign-up", this.signUpView);
    }
    public loginView = (req: Request, res: Response) => {
        // req.session =
        // tslint:disable-next-line: no-console
        console.log(req.session);
        res.render("entreprise/login", {title: "Login"});
    }
    public signUpView = (req: Request, res: Response) => {
        res.render("entreprise/signUp", {title: "Sign-up"});
    }
    public connect = (req: Request, res: Response) => {
        const sess = req.session;
    }
}

export default LoginController;
