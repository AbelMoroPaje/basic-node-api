require('dotenv').config();

const express = require("express");
const sequelize = require("./database");
const port = process.env.PORT || 5555;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

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
app.get('/actors/deleted', actorController.findDeleted);
app.get('/actors/:id', actorController.findById);
app.post('/actors', actorController.create);
app.put('/actors/:id', actorController.update);
app.delete('/actors/:id', actorController.delete);

app.get('/directors', directorController.findAll);
app.get('/directors/deleted', directorController.findDeleted);
app.get('/directors/:id', directorController.findById);
app.post('/directors', directorController.create);
app.put('/directors/:id', directorController.update);
app.delete('/directors/:id', directorController.delete);

app.get('/movies', movieController.findAll);
app.get('/movies/deleted', movieController.findDeleted);
app.get('/movies/:id', movieController.findById);
app.post('/movies', movieController.create);
app.put('/movies/:id', movieController.update);
app.delete('/movies/:id', movieController.delete);

app.get('/movies/:movieId/actors', movieActorsController.getActorsByMovie);
app.post('/movies/:movieId/actors', movieActorsController.addActorsToMovie);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});