"use strict";
const http = require("http");
const Application_1 = require("./Application");
const SERVER = http.createServer(Application_1.default);
SERVER.listen(8080);
console.log("server listening on defined port");
