const express = require('express');
const usuariosController = require('../controllers/usuariosController');

const router = express.Router();

router.get('/usuarios', usuariosController.getUsuarios);
router.get('/usuarios/:id', usuariosController.getUsuarioById);
router.post('/usuarios', usuariosController.createUsuario);
router.put('/usuarios/:id', usuariosController.updateUsuario);
router.delete('/usuarios/:id', usuariosController.deleteUsuario);

module.exports = router;
