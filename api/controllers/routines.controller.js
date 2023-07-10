const Routine = require('../models/routine.model');
const createError = require('http-errors');

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

module.exports.detail = (req, res, next) => res.json(req.routine)

module.exports.delete = (req, res, next) => {
  Routine.deleteOne({ _id: req.routine.id })
    .then(() => res.status(204).send())
    .catch(next)
}

module.exports.update = (req, res, next) => {
  Object.assign(req.routine, req.body);
  req.routine.save()
    .then((routine) => res.json(routine))
    .catch(next)
}