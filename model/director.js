const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Director = sequelize.define('Director', {
        DirectorID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING,
        },
        Apellido: {
            type: DataTypes.STRING,
        },
        Nacionalidad: {
            type: DataTypes.STRING,
        },
    });
    return Director;
};