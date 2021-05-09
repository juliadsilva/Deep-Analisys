const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criado
const baralho_controller = require('../controllers/baralho.controller');

// Create
router.post('/', baralho_controller.create);

// Read
router.get('/:id', baralho_controller.listar);
router.get('/idUsuario/:idUsuario', baralho_controller.details);
router.get('/check/:nome', baralho_controller.detailsByName);

// Update
router.put('/:id', baralho_controller.update);

// Delete
router.delete('/:id', baralho_controller.delete);

module.exports = router;