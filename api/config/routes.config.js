const express = require('express');
const router = express.Router();
const routines = require('../controllers/routines.controller')

router.get('/routines', routines.list);
router.post('/routines', routines.create);

module.exports = router;