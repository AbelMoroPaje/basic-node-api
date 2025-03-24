require('dotenv').config();

const express = require("express");
const sequelize = require("./database");
const port = process.env.PORT || 5555;

const app = express();
app.use(express.json());

const relationships = require('./relationships')(sequelize);
module.exports = {
    app,
    relationships,
}

const actorController = require('./entidades/actors/controller');
const directorController = require('./entidades/directors/controller');
const movieController = require('./entidades/movies/controller');
const movieActorsController = require('./entidades/moviesActors/controller');

app.get('/', (req, res) => {
    return res.status(200).json("BASIC NODE API");
});

app.get('/actors', actorController.findAll);
app.get('/directors', directorController.findAll);
app.get('/movies', movieController.findAll);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});