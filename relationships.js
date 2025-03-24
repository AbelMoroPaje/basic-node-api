module.exports = (sequelize) => {
    const DirectorModel = require('./entidades/directors/model')(sequelize);
    const ActorModel = require('./entidades/actors/model')(sequelize);
    const MovieModel = require('./entidades/movies/model')(sequelize);
    const MoviesActorsModel = require('./entidades/moviesActors/model')(sequelize);

    MovieModel.belongsTo(DirectorModel, { foreignKey: 'DirectorID' });
    DirectorModel.hasMany(MovieModel, { foreignKey: 'DirectorID' });

    MovieModel.belongsToMany(ActorModel, { through: MoviesActorsModel, foreignKey: 'MovieID', otherKey: 'ActorID' });
    ActorModel.belongsToMany(MovieModel, { through: MoviesActorsModel, foreignKey: 'ActorID', otherKey: 'MovieID' });

    return { Director: DirectorModel, Actor: ActorModel, Movie: MovieModel, MoviesActors: MoviesActorsModel };
};