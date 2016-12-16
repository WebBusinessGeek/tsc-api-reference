"use strict";
class SecondHttpInterceptor {
    static intercept(req, res, next) {
        if (req.method != "GET" && req.body.api_key != "asdf2309rerfkjs3o9ur")
            res.json("didn't match broham");
        else
            next();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SecondHttpInterceptor;
