const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(morgan('dev'));

// Carga y abre la conexión con la base de datos
require('./db/index');

// Middleware para permitir recibir solicitudes HTTP desde cualquier dominio
app.use(cors())

// Middleware para leer datos en JSON desde el body de la petición
app.use(bodyParser.json())

// Rutas
const userRoutes = require('./components/users/routes');

app.use("/api/v1/users", userRoutes);

app.use("/status", (req, res) => {
    res.json({message: "Hello Word !!!"});
});


module.exports = app;