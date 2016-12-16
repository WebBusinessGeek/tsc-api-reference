"use strict";
class HttpInterceptor {
    static intercept(req, res, next) {
        console.log("first");
        next();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HttpInterceptor;
