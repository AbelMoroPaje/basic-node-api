const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Actor = sequelize.define('Actor', {
        ActorID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
        },
        Nationality: {
            type: DataTypes.STRING,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
    }, {
        tableName: "Actors",
        timestamps: false,
    });
    return Actor;
};