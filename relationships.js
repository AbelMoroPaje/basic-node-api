const Director = require('./models/director/model');
const Actor = require('./models/actor/model');
const Movie = require('./models/movie/model');
const MoviesActors = require('./models/moviesActors/model');

module.exports = (sequelize) => {
    const DirectorModel = Director(sequelize);
    const ActorModel = Actor(sequelize);
    const MovieModel = Movie(sequelize);
    const MoviesActorsModel = MoviesActors(sequelize);

    MovieModel.belongsTo(DirectorModel, { foreignKey: 'DirectorID' });
    DirectorModel.hasMany(MovieModel, { foreignKey: 'DirectorID' });

    MovieModel.belongsToMany(ActorModel, { through: MoviesActorsModel, foreignKey: 'MovieID', otherKey: 'ActorID' });
    ActorModel.belongsToMany(MovieModel, { through: MoviesActorsModel, foreignKey: 'ActorID', otherKey: 'MovieID' });

    return { Director: DirectorModel, Actor: ActorModel, Movie: MovieModel, MoviesActors: MoviesActorsModel };
};