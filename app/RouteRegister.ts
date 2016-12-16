import {Router} from "express";
import Handler from "./Handler";
import SecondHandler from "./SecondHandler";

class RouteRegister {
    router: Router

    constructor() {
        this.router = Router();
        this.registerRouteHandlers();
    }

    private registerRouteHandlers() {
        this.router.get("/", Handler.handle);
        this.router.get("/sub", SecondHandler.handle);

        //protected route
        this.router.post("/", (req, res, next) => {
            console.log("reached route because api key matched");
            res.json({
                message: "all good"
            });
        })
    }

}

export default new RouteRegister().router;