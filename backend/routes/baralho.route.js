const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criado
const baralho_controller = require('../controllers/baralho.controller');

// Create
router.post('/', baralho_controller.create);

// Read
router.get('/:id', baralho_controller.details);
router.get('/idUsuario/:idUsuario', baralho_controller.detailsByIdUsuario);
router.get('/:idUsuario/:nome', baralho_controller.detailsByNome);

// Update
router.put('/:id', baralho_controller.update);

// Delete
router.delete('/:idUsuario/:nome', baralho_controller.delete);

module.exports = router;