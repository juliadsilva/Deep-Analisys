const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PartidaSchema = new Schema({
    id: { type: Number, required: true },
    win: { type: Number, required: true },
    win: { type: Number, required: true },
    loss: { type: Number, required: true },
    idBaralho: { type: mongoose.Schema.Types.ObjectId, ref: 'Baralho' }
});

// Exportar o modelo
module.exports = mongoose.model('Partida', PartidaSchema);