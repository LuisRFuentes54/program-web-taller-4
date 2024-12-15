const WebSocket = require('ws');
const users = require("../../db.json");

const socketServer = {};

socketServer.init = (server) => {
    const wss = new WebSocket.Server({ server });
   
    console.log("Websocket server initialized")

    // Manejador de eventos para nuevas conexiones WebSocket
    wss.on('connection', (ws) => {
        console.log('Nuevo cliente conectado');
        ws.send("Conectado al servidor de WebSocekts del taller 4 de program web");

        // Manejador de eventos para mensajes recibidos
        ws.on('message', (message) => {
            console.log(`Mensaje recibido: ${message}`);
            for (const user of users) {
                if (user.key == message) {
                    ws.send(`Mensaje recibido: ${user.name}`);
                    return;
                }
            }
            ws.send("Error: Clave invalida");
        });

        // Manejador de eventos para desconexiones
        ws.on('close', () => {
            console.log('Cliente desconectado');
        });
    });
};

module.exports = socketServer;