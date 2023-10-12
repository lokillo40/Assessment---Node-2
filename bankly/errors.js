// error.js
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    // You can also log the error details here for debugging purposes

    return res.status(status).json({
        error: { message, status }
    });
}

module.exports = errorHandler;
