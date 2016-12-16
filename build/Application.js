"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const RouteRegister_1 = require("./RouteRegister");
const HttpInterceptor_1 = require("./HttpInterceptor");
const SecondHttpInterceptor_1 = require("./SecondHttpInterceptor");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(HttpInterceptor_1.default.intercept);
        this.express.use(SecondHttpInterceptor_1.default.intercept);
    }
    routes() {
        this.express.use("/", RouteRegister_1.default);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
