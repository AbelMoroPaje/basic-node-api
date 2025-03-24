const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const MoviesActors = sequelize.define('MoviesActors', {
        MovieID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Movies',
                key: 'MovieID'
            }
        },
        ActorID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Actors',
                key: 'ActorID'
            }
        }
    }, {
        tableName: 'MoviesActors',
        timestamps: false
    });
    return MoviesActors;
};