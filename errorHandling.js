function throwGetError(error, res, customMessage, statusCode = 500) {
    const message = customMessage || "Internal server error";
    return res.status(statusCode).json({ error: message, originalError: error.message });
};

module.exports = { throwGetError };