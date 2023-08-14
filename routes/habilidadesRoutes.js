const express = require('express');
const habilidadesController = require('../controllers/habilidadesController');

const router = express.Router();

router.post('/habilidades', habilidadesController.createHabilidad);
router.get('/habilidades', habilidadesController.getHabilidades);
router.get('/habilidades/:id', habilidadesController.getHabilidadById);
router.put('/habilidades/:id', habilidadesController.updateHabilidad);
router.delete('/habilidades/:id', habilidadesController.deleteHabilidad);

module.exports = router;
