import * as bodyParser from "body-parser";
import App from "./app";
import HomeController from "./Controllers/HomeController";
import loggerMiddleware from "./Middleware/loggerMiddleware";

const app = new App({
    controllers: [
        new HomeController()
    ],
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ],
    port: 3000

});

app.listen();
