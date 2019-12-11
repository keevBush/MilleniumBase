import * as bodyParser from "body-parser";
import App from "./app";
import LoginController from "./Controllers/Auth/LoginController";
import HomeController from "./Controllers/HomeController";
import SettingController from "./Controllers/SettingController";
import StoreController from "./Controllers/StoreController";
import loggerMiddleware from "./Middleware/loggerMiddleware";
import securityMiddleware from "./Middleware/securityMiddleware";

const app = new App({
    controllers: [
        new HomeController(),
        new SettingController(),
        new StoreController(),
        new LoginController()
    ],
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
        securityMiddleware
    ],
    port: 3000,
});

app.listen();
