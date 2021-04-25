const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BaralhoSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    cor: { type: String, required: true },
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

// Exportar o modelo
module.exports = mongoose.model('Baralho', BaralhoSchema);