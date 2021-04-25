const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    username: { type: String, required: true, max: 100 },
    pais: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

// Exportar o modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);