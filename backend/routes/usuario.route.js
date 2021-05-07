const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criado
const usuario_controller = require('../controllers/usuario.controller');

// Create
router.post('/', usuario_controller.create);

// Read
router.get('/:token', usuario_controller.details);
router.get('/check/:email', usuario_controller.detailsByEmail);

module.exports = router;