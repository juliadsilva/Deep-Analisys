const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BaralhoSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    formato: { type: String, required: true },
    winrate: { type: Number },
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

// Exportar o modelo
module.exports = mongoose.model('Baralho', BaralhoSchema);