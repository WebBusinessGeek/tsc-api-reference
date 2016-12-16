class SecondHttpInterceptor {
    public static intercept(req, res, next) {
        if(req.method != "GET" && req.body.api_key != "asdf2309rerfkjs3o9ur")
            res.json("didn't match broham");
        else
            next()
    }
}

export default SecondHttpInterceptor;