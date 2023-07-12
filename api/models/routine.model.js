const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const routineSchema = new Schema({
  name: {
    type: String,
    required: "Routine name is required"
  },
  exerciseName: {
    type: String,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.__v;
      ret.id = ret._id;
      delete ret._id;
      return ret;
    }
  }
})

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine;