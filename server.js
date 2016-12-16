var app = require("express")();
app.get("/", function(req, res) {
    res.json({message: "working"});
});
app.listen(8080);
console.log("Server listening on defined port");