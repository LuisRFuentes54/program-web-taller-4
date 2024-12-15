const app = require("./app/server");
const socketServer = require("./sockets/sockets.coordinator");

const http = require("http");

const httpServer = http.createServer(app);

socketServer.init(httpServer);

httpServer.listen(app.get("port"), "0.0.0.0", () => {
    console.log(`Server running - Port ${app.get("port")}`)
});
