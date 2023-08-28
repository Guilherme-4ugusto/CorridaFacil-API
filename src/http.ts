const http = require('http')
const { Server } = require("socket.io");
const { app }  = require("./app")

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export {serverHttp, io} 