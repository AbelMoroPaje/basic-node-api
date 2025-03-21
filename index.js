require('dotenv').config(); // Cargar las variables de entorno

const express = require("express");
const sequelize = require("./database");
const { Actor, Director, Movie } = require("./relationships")(sequelize);
const port = process.env.PORT || 5555; // puerto del .env o 5555 por defecto
const logger = process.env.LOGGER || console;

const app = express();

app.use(express.json());


function throwGetError(str, error, res, customMessage) {
    logger.error(`Error getting ${str}:`, error);
    const message = customMessage || "Internal server error";
    return res.status(500).json({ error: message });
}

app.get('/', (req, res) => {
    return res.status(200).json("BASIC NODE API")
});

app.get('/actors', async (req, res) => {
    try {
        const actors = await Actor.findAll();
        return res.status(200).json(actors);
    } catch (error) {
        console.error("Error getting actors:", error);
        throwGetError("actors", error, res, "Failed to retrieve actors.");
    }
});

app.get('/directors', async (req, res) => {
    try {
        const directors = await Director.findAll();
        return res.status(200).json(directors);
    } catch (error) {
        throwGetError("directors", error, res, "Failed to retrieve directors.");
    }
});

app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        return res.status(200).json(movies);
    } catch (error) {
        throwGetError("movies", error, res, "Failed to retrieve movies.");
    }
});

app.get('/actors/gonzalo', (req, res) => {
    const Gonzalo = Actor.build({
        FirstName: "Gonzalo",
        LastName: "Cano",
        Nationality: "Spanish",
    });

    return res.status(200).json(Gonzalo.toJSON());
});

app.get('/actors/gonzalodb', async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
        const Gonzalo = await Actor.create({
            FirstName: "Gonzalo",
            LastName: "Cano",
            Nationality: "Spanish",
        }, { transaction });

        await transaction.commit();
        return res.status(201).json(Gonzalo.toJSON());
    } catch (error) {
        await transaction.rollback();
        console.error("Error creating actor:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});