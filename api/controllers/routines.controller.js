const Routine = require('../models/routine.model');

module.exports.list = (req, res, next) => {
  Routine.find()
    .then((routines) => res.json(routines))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  Routine.create(req.body)
    .then((routine) => res.status(201).json(routine))
    .catch(next)
}