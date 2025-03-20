module.exports = (sequelize) => {
    const Director = require('./models/director')(sequelize);
    const Actor = require('./models/actor')(sequelize);
    const Movie = require('./models/movie')(sequelize);
    const MoviesActors = require('./models/moviesActors')(sequelize);

    Movie.belongsTo(Director, { foreignKey: 'DirectorID' });
    Director.hasMany(Movie, { foreignKey: 'DirectorID' });

    Movie.belongsToMany(Actor, { through: MoviesActors, foreignKey: 'MovieID', otherKey: 'ActorID' });
    Actor.belongsToMany(Movie, { through: MoviesActors, foreignKey: 'ActorID', otherKey: 'MovieID' });

    return { Director, Actor, Movie, MoviesActors };
};