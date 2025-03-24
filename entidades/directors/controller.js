const { relationships } = require('../../index');
const Director = relationships.Director;
const { throwGetError } = require('../../errorHandling');

exports.findAll = async (req, res) => {
    try {
        console.log(Director);
        const directors = await Director.findAll();
        return res.status(200).json(directors);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve directors.", 500);
    }
};

exports.create = async (req, res) => {
    try {
        const newDirector = await Director.create(req.body);
        return res.status(201).json(newDirector);
    } catch (error) {
        throwGetError(error, res, "Failed to create director.", 500);
    }
}