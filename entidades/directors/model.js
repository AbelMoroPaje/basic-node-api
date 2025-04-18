const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Director = sequelize.define('Director', {
        DirectorID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        FirstName: {
            type: DataTypes.STRING,
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
        tableName: "Directors",
        timestamps: false,
    });
    return Director;
};