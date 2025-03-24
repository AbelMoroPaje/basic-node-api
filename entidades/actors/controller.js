const { relationships } = require('../../index');
const Actor = relationships.Actor;
const {throwGetError} = require('../../errorHandling')


exports.findAll = async(req, res) => {
    try {
        console.log(Actor);
        const actors = await Actor.findAll();
        return res.status(200).json(actors);
    } catch (error) {
        throwGetError("actors", error, res, "Failed to retrieve actors.");
    }
};