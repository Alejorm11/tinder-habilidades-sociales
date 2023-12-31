const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();

router.post('/getMatch', matchController.getMatch);

module.exports = router;
