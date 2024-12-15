const WebSocket = require('ws');

const socketServer = {};

socketServer.init = (server) => {
    const wss = new WebSocket.Server({ server });
   
    console.log("Websocket server initialized")

    // Manejador de eventos para nuevas conexiones WebSocket
    wss.on('connection', (ws) => {
        console.log('Nuevo cliente conectado');
        ws.send("Conectado al servidor de WebSocekts");

        // Manejador de eventos para mensajes recibidos
        ws.on('message', (message) => {
            console.log(`Mensaje recibido: ${message}`);
            // Aquí puedes procesar el mensaje y enviar una respuesta
            ws.send("Conectado al servidor de WebSocekts");
        });

        // Manejador de eventos para desconexiones
        ws.on('close', () => {
            console.log('Cliente desconectado');
        });
    });
};

module.exports = socketServer;