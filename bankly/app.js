/** Application for bank.ly */

const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");

app.use(express.json());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

/** 404 handler */
app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    return res.status(status).json({
        status: status,
        message: message
    });
}

app.use(errorHandler);

module.exports = app;
