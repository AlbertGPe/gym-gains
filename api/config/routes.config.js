const express = require('express');
const router = express.Router();
const routines = require('../controllers/routines.controller');
const routinesMid = require('../middlewares/routines.mid');

const todo = (req, res, next) => {
  res.send('TODO')
}

router.get('/routines', routines.list);
router.post('/routines', routines.create);
router.get('/routines/:id', routinesMid.exists, routines.detail);
router.delete('/routines/:id', routinesMid.exists, routines.delete);
router.patch('/routines/:id', routinesMid.exists, routines.update);

router.get('/users', todo);
router.post('/users', todo);
router.get('/users:id', todo)

module.exports = router;