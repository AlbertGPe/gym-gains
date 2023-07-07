require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const app = express();

app.use(logger('dev'))


/* Error Handling */
app.use((req, res, next) => next(createError(404, 'Route not found')))

app.use((error, req, res, next) => {

})

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Aplication running at port ${port}`))

