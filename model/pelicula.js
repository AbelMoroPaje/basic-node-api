const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Pelicula = sequelize.define('Pelicula', {
        PeliculaID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AnioEstreno: {
            type: DataTypes.INTEGER,
        },
        Genero: {
            type: DataTypes.STRING,
        },
        DirectorID: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: "Peliculas",
        timestamps: false,
    });
    return Pelicula;
};