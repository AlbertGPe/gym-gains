const express = require('express');
const router = express.Router();
const routines = require('../controllers/routines.controller');
const routinesMid = require('../middlewares/routines.mid');

router.get('/routines', routines.list);
router.post('/routines', routines.create);
router.get('/routines/:id', routinesMid.exists, routines.detail);
router.delete('/routines/:id', routinesMid.exists, routines.delete);
router.patch('/routines/:id', routinesMid.exists, routines.update);

module.exports = router;