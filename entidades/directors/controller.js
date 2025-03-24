const { relationships } = require('../../index');
const Director = relationships.Director;
const {throwGetError} = require('../../errorHandling');

exports.findAll = async(req, res) => {
    try {
        console.log(Director);
        const actors = await Director.findAll();
        return res.status(200).json(actors);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve directors.", 500);
    }
};