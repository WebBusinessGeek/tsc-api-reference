"use strict";
class Handler {
    static handle(req, res, next) {
        res.json({
            message: "working still"
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Handler;
