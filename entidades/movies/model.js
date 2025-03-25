const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Movie = sequelize.define('Movie', {
        MovieID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ReleaseYear: {
            type: DataTypes.INTEGER,
        },
        Genre: {
            type: DataTypes.STRING,
        },
        DirectorID: {
            type: DataTypes.INTEGER,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
    }, {
        tableName: "Movies",
        timestamps: false,
    });
    return Movie;
};