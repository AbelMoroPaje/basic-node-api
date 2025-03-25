const { relationships } = require('../../index');
const Actor = relationships.Actor;
const { throwGetError } = require('../../errorHandling');
const { Op } = require('sequelize');

exports.findAll = async (req, res) => {
    try {
        const { nationality, firstName, lastName } = req.query;

        let whereClause = {
            deletedAt: null,
        };

        if (nationality) {
            whereClause.Nationality = nationality;
        }

        if (firstName) {
            whereClause.FirstName = { [Op.like]: `%${firstName}%` };
        }

        if (lastName) {
            whereClause.LastName = { [Op.like]: `%${lastName}%` };
        }

        const actors = await Actor.findAll({
            where: whereClause,
        });

        return res.status(200).json(actors);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve actors.", 500);
    }
};

exports.findDeleted = async (req, res) => {
    try {
        const actors = await Actor.findAll({
            where: {
                deletedAt: {
                    [Op.not]: null,
                },
            },
        });

        return res.status(200).json(actors);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve deleted actors.", 500);
    }
};

exports.findById = async (req, res) => {
    try {
        const actorId = req.params.id;

        const actor = await Actor.findOne({
            where: {
                ActorID: actorId,
                deletedAt: null,
            },
        });

        if (actor) {
            return res.status(200).json(actor);
        } else {
            return res.status(404).json({ error: "Actor not found." });
        }
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve actor.", 500);
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

exports.update = async (req, res) => {
    try {
        const actorId = req.params.id;
        const updatedActorData = req.body;

        const actor = await Actor.findOne({
            where: {
                ActorID: actorId,
                deletedAt: null,
            },
        });

        if (!actor) {
            return res.status(404).json({ error: "Actor not found." });
        }

        await actor.update(updatedActorData);

        return res.status(200).json({ message: "Actor updated successfully." });
    } catch (error) {
        throwGetError(error, res, "Failed to update actor.", 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const actorId = req.params.id;

        const actor = await Actor.findOne({
            where: {
                ActorID: actorId,
                deletedAt: null,
            },
        });

        if (!actor) {
            return res.status(404).json({ error: "Actor not found." });
        }

        await Actor.update({ deletedAt: new Date() }, { where: { ActorID: actorId } });

        return res.status(200).json({ message: "Actor marked as deleted successfully." });
    } catch (error) {
        throwGetError(error, res, "Failed to mark actor as deleted.", 500);
    }
};