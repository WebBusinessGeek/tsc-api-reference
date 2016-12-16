class HttpInterceptor {
    public static intercept(req, res, next) {
        console.log("first");
        next();
    }
}

export default HttpInterceptor;