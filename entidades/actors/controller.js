const { relationships } = require('../../index');
const Actor = relationships.Actor;
const { throwGetError } = require('../../errorHandling');

exports.findAll = async (req, res) => {
    try {
        console.log(Actor);
        const actors = await Actor.findAll();
        return res.status(200).json(actors);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve actors.", 500);
    }
};

exports.create = async (req, res) => {
    try {
        const newActor = await Actor.create(req.body);
        return res.status(201).json(newActor);
    } catch (error) {
        throwGetError(error, res, "Failed to create actor.", 500);
    }
};