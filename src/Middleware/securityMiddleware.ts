import { Request, Response } from "express";
import fs from "fs";

const securityMiddleware = (req: Request, resp: Response, next: () => void) => {
    // csrf token sur toute les requetes
    // tslint:disable-next-line: no-console
    // console.log("secuity middleware ...");
    next();
};

export default securityMiddleware;
