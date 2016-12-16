"use strict";
class SecondHandler {
    static handle(req, res, next) {
        res.json({
            message: "working from sub class"
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SecondHandler;
