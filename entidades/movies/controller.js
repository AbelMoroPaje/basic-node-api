const { relationships } = require('../../index');
const Movie = relationships.Movie;
const {throwGetError} = require('../../errorHandling');

exports.findAll = async(req, res) => {
    try {
        console.log(Movie);
        const Movies = await Movie.findAll();
        return res.status(200).json(Movies);
    } catch (error) {
        throwGetError(error, res, "Failed to retrieve Movies.", 500);
    }
};