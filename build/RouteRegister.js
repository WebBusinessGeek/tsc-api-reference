"use strict";
const express_1 = require("express");
const Handler_1 = require("./Handler");
const SecondHandler_1 = require("./SecondHandler");
class RouteRegister {
    constructor() {
        this.router = express_1.Router();
        this.registerRouteHandlers();
    }
    registerRouteHandlers() {
        this.router.get("/", Handler_1.default.handle);
        this.router.get("/sub", SecondHandler_1.default.handle);
        //protected route
        this.router.post("/", (req, res, next) => {
            console.log("reached route because api key matched");
            res.json({
                message: "all good"
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new RouteRegister().router;
