const { relationships } = require('../../index');
const Director = relationships.Director;
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

        const directors = await Director.findAll({
            where: whereClause,
        });

        return res.status(200).json(directors);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve directors.", 500);
    }
};

exports.findDeleted = async (req, res) => {
    try {
        const directors = await Director.findAll({
            where: {
                deletedAt: {
                    [Op.not]: null,
                },
            },
        });

        return res.status(200).json(directors);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve deleted directors.", 500);
    }
};

exports.findById = async (req, res) => {
    try {
        const directorId = req.params.id;

        const director = await Director.findByPk(directorId);

        if (director) {
            return res.status(200).json(director);
        } else {
            return res.status(404).json({ error: "Director not found." });
        }
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve director.", 500);
    };
};

exports.create = async (req, res) => {
    try {
        const newDirector = await Director.create(req.body);
        return res.status(201).json(newDirector);
    } catch (error) {
        throwGetError(error, res, "Failed to create director.", 500);
    };
};

exports.update = async (req, res) => {
    try {
        const directorId = req.params.id;
        const updatedDirectorData = req.body;

        const director = await Director.findByPk(directorId);

        if (!director) {
            return res.status(404).json({ error: "Director not found." });
        }

        await director.update(updatedDirectorData);

        return res.status(200).json({ message: "Director updated successfully." })
    } catch (error) {
        throwGetError(error, res, "Failed to update director.", 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const directorId = req.params.id;

        const director = await Director.findOne({
            where: {
                DirectorID: directorId,
                deletedAt: null,
            },
        });

        if (!director) {
            return res.status(404).json({ error: "Director not found." });
        }

        await director.update({ deletedAt: new Date() }, { where: { DirectorID: directorId } });

        return res.status(200).json({ message: "Director marked as deleted successfully." })
    } catch (error) {
        throwGetError(error, res, "Failed to mark director as deleted.", 500)
    }
};