const { relationships } = require('../../index');
const Movie = relationships.Movie;
const { throwGetError } = require('../../errorHandling');
const { Op } = require('sequelize');

exports.findAll = async (req, res) => {
    try {
        const { title, releaseYear, genre, directorId } = req.query;

        let whereClause = {};

        if (title) {
            whereClause.Title = { [Op.like]: `%${title}%` };
        }

        if (releaseYear) {
            whereClause.ReleaseYear = releaseYear;
        }

        if (genre) {
            whereClause.Genre = genre;
        }

        if (directorId) {
            whereClause.DirectorID = directorId;
        }

        const movies = await Movie.findAll({
            where: whereClause,
        });

        return res.status(200).json(movies);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve movies.", 500);
    }
};

exports.findById = async (req, res) => {
    try {
        const movieId = req.params.id;

        const movie = await Movie.findByPk(movieId);

        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json({ error: "Movie not found." });
        }
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve movie.", 500);
    }
};

exports.create = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        return res.status(201).json(newMovie);
    } catch (error) {
        throwGetError(error, res, "Failed to create movie.", 500);
    }
};

exports.update = async (req, res) => {
    try {
        const movieId = req.params.id;
        const updatedMovieData = req.body;

        const movie = await Movie.findByPk(movieId);

        if (!movie) {
            res.status(404).json({ error: "Movie not found." });
        }

        await movie.update(updatedMovieData);

        return res.status(200).json({ message: "Movie updated successfully." });
    } catch (error) {
        throwGetError(error, res, "Failed to update movie.");
    }
};

exports.delete = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findByPk(movieId);

        if (!movie) {
            res.status(404).json({ error: "Movie not found." });
        }

        await movie.destroy();

        return res.status(200).json({ message: "Movie deleted successfully." });
    } catch (error) {
        throwGetError(error, res, "Failed to delete movie.", 500);
    }
};