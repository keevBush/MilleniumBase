import { Request, Response } from "express";
import * as express from "express";

abstract class BaseController {
    protected request: Request;
    protected response: Response;

    protected router = express.Router();
    protected middlewares: void [] ;

    public initMiddleware(middlewares: void[]) {
        this.middlewares = middlewares;
    }

    public initController(request: Request, response: Response, middlewares: void []) {
        this.request = request;
        this.response = response;
        this.initMiddleware (middlewares);
    }

    public response404() {
        return this.response.status(404).send("Not found");
    }

    public response500(ex: any) {
        return this.response.status(500).send(ex);
    }

    public responseCode(code: number, data: any) {
        return this.response.status(code).send(data);
    }
}

export default BaseController;
