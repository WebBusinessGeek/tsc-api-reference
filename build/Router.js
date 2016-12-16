"use strict";
const express_1 = require("express");
const Handler_1 = require("./Handler");
const SubHandler_1 = require("./SubHandler");
class RouteRegister {
    constructor() {
        this.router = express_1.Router();
        this.registerRouteHandlers();
    }
    registerRouteHandlers() {
        this.router.get("/", Handler_1.default.handle);
        this.router.get("/sub", SubHandler_1.default.handle);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new RouteRegister().router;
