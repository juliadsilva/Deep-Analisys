const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Importa routes
const usuario = require('./routes/usuario.route');
const baralho = require('./routes/baralho.route');
const partida = require('./routes/partida.route');
const app = express();

// Configurar acesso à BD.
var mongoDB = 'mongodb://localhost/DeepAnalysisDataBase';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
db.once('open', function callback() {
    console.log("Conexão Aberta");
    console.log(mongoose.connection.readyState);
});


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/usuario', usuario);
app.use('/baralho', baralho);
app.use('/partida', partida);


//Servidor
let port = 8080;
app.listen(port, () => {
    console.log('Servidor em execução no porto: ' + port);
    console.log(mongoose.connection.readyState);
});