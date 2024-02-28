const express = require('express');
const router = express.Router();

const agreController = require('../controllers/agregarController')

router.get('/', agreController.list);

module.exports = router;