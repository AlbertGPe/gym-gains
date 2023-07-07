const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/gym-gains'

mongoose.connect(MONGODB_URI)
  .then(() => console.info(`Successfully connected`))
  .catch((error) => console.error('An error ocurred trying to connect to database', error))