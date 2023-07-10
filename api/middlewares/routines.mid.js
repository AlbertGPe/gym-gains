const Routine = require('../models/routine.model');
const createError = require('http-errors')

module.exports.exists = (req, res, next) => {
  Routine.findById(req.params.id) 
    .then((routine) => {
      if (routine) {
        req.routine = routine
        next();
      } else {
        next(createError(404, 'Routine not found'))
      }
    })
}