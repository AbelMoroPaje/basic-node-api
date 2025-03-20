const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('moviesdb', 'root', 'toor', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

testConnection();

module.exports = sequelize;