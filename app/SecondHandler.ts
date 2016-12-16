
class SecondHandler  {

    public static handle(req, res, next) {
        res.json({
            message: "working from sub class"
        });
    }
}

export default SecondHandler;