const { relationships } = require('../../index');
const Movie = relationships.Movie;
const Actor = relationships.Actor;
const MoviesActors = relationships.MoviesActors;
const { throwGetError } = require('../../errorHandling');

exports.getActorsByMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;

        if (!movieId) {
            return res.status(400).json({ error: "Invalid request. movieId is required." });
        }

        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found." });
        }

        const actors = await Actor.findAll({
            include: [{
                model: Movie,
                through: {
                    model: MoviesActors,
                    attributes: [],
                },
                where: {
                    MovieID: movieId,
                },
                attributes: [],
            }],
        });

        return res.status(200).json(actors);
    } catch (error) {
        throwGetError(error, res, "Failed to get actors by movie.", 500);
    }
};

exports.addActorsToMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const actorIds = req.body.actorIds;

        if (!movieId || !actorIds || !Array.isArray(actorIds) || actorIds.length === 0) {
            return res.status(400).json({ error: "Invalid request. movieId and actorIds are required." });
        }

        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found." });
        }

        const actors = await Actor.findAll({
            where: {
                ActorID: actorIds,
            },
        });

        if (actors.length !== actorIds.length) {
            return res.status(400).json({ error: "One or more actors not found." });
        }

        const movieActorAssociations = actorIds.map(actorId => ({
            MovieID: movieId,
            ActorID: actorId,
        }));

        await MoviesActors.bulkCreate(movieActorAssociations);

        return res.status(201).json({ message: "Actors added to movie successfully." });
    } catch (error) {
        throwGetError(error, res, "Failed to add actors to movie.", 500);
    }
};