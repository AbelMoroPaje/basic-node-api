function throwGetError(str, error, res, customMessage) {    
    const message = customMessage || "Internal server error";
    return res.status(500).json({ error: message });
}

module.exports = {throwGetError};