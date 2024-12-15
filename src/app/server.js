const express = require("express");
const cors = require("cors");
const app = express();
app.set('port', process.env.PORT);


app.use(express.json());
app.use(cors({
    "origin": "*",
    "methods": "GET,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true
}));

app.get("/", (req, res) => {
    res.status(200).json({
        "message": "Bienvenido. Este es el servidor para el taller 4 de program web"
    })
})

app.get("/boats", (req, res) => {
    res.status(200).json({
        boats: [
            {
                name: "Portaaviones",
                spaces: 5
            },
            {
                name: "Acorazado",
                spaces: 4
            },
            {
                name: "Crucero",
                spaces: 3
            },
            {
                name: "Submarino",
                spaces: 3
            },
            {
                name: "Destructor",
                spaces: 2
            }
        ]
    })
})

module.exports = app;