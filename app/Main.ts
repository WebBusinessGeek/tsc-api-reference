import * as http from "http";
import App from "./Application";

const SERVER = http.createServer(App);
SERVER.listen(8080);
console.log("server listening on defined port");