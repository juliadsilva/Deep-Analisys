const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criado
const partida_controller = require('../controllers/partida.controller');

// Create
router.post('/', partida_controller.create);

// Read
router.get('/:id', partida_controller.detailsById);
router.get('/idBaralho/:idBaralho', partida_controller.detailsByIdBaralho);

// Delete
router.delete('/:id', partida_controller.delete);

module.exports = router;