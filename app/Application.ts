import * as express from "express";
import * as bodyParser from "body-parser";
import RouteRegister from "./RouteRegister";
import HttpInterceptor from "./HttpInterceptor";
import SecondHttpInterceptor from "./SecondHttpInterceptor";


class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false}));
        this.express.use(HttpInterceptor.intercept);
        this.express.use(SecondHttpInterceptor.intercept);
    }

    private routes() {
        this.express.use("/", RouteRegister);
    }

}

export default new App().express;