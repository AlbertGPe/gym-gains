const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const routineSchema = new Schema({
  name: {
    type: String,
    required: "Routine name is required"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})