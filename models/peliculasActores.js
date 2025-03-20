const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PeliculasActores = sequelize.define('PeliculasActores', {
    PeliculaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Peliculas',
        key: 'PeliculaID'
      }
    },
    ActorID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Actores',
        key: 'ActorID'
      }
    }
  }, {
    tableName: 'PeliculasActores',
    timestamps: false
  });
  return PeliculasActores;
};