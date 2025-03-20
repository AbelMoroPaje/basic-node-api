const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = (sequelize) => {
    const Actor = sequelize.define('Actor', {
        ActorID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Apellido: {
            type: DataTypes.STRING,
        },
        Nacionalidad: {
            type: DataTypes.STRING,
        },
    });
    return Actor;
};