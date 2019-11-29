import express from "express";
import { Application } from "express";

class App {

    public app: Application;
    public port: number;
    constructor( appInit: {port: number; middlewares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port;

        // Initialize middleware and controllers
        this.middlemares(appInit.middlewares);
        this.routes(appInit.controllers);
        this.assets();
        this.template();

    }

    public listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line: no-console
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }

    private middlemares(middlewares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middlewares.forEach((m) => {
            this.app.use(m);
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach((c) => {
            this.app.use("/", c.router);
        });
    }

    private template() {
        this.app.set("view engine", "pug");
    }

    private assets() {
        this.app.use(express.static("public"));
        this.app.use("views" ,  express.static("views"));
    }

}
export default App;
