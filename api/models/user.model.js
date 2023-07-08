const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {
    type: String,
    required: "User name is required",
    minLength: [3, "Your username needs at least 3 characters"],
  },
  email: {
    type: String,
    required: "User email is required",
    match: [/^\S+@\S+\.\S+$/, "Student email must be valid"]
  },
  password: {
    type: String,
    required: "User password is required",
    minLength: [7, "Password need at least 7 characters"]
  }
}, {
  timestamps: true
})

userSchema.virtual('routines', {
  ref: 'Routine',
  localField: '_id',
  foreignField: 'user',
  justOne: false
})

const User = mongoose.model('User', userSchema);
module.exports = User;