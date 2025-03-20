module.exports = (sequelize) => {
    const Director = require('./models/director')(sequelize);
    const Actor = require('./models/actor')(sequelize);
    const Pelicula = require('./models/pelicula')(sequelize);
    const PeliculasActores = require('./models/peliculasActores')(sequelize);  
    
    Pelicula.belongsTo(Director, { foreignKey: 'DirectorID' });
    Director.hasMany(Pelicula, { foreignKey: 'DirectorID' });
  
    Pelicula.belongsToMany(Actor, { through: PeliculasActores, foreignKey: 'PeliculaID', otherKey: 'ActorID' });
    Actor.belongsToMany(Pelicula, { through: PeliculasActores, foreignKey: 'ActorID', otherKey: 'PeliculaID' });
  
    return { Director, Actor, Pelicula, PeliculasActores };
  };