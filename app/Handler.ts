import {Request, Response, NextFunction} from "express";

class Handler {
    static request: Request;
    static response: Response;
    static nextFunction: NextFunction;

    public static handle(req: Request, res: Response, next: NextFunction) {
        res.json({
            message: "working still"
        });
    }
}

export default Handler;