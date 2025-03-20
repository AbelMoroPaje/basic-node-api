require('dotenv').config(); // Cargar las variables de entorno

const express = require("express");
const sequelize = require("./database");
const { Actor, Director, Movie } = require("./relationships")(sequelize);
const port = process.env.PORT || 5555; // puerto del .env o 5555 por defecto

const app = express();

app.use(express.json());

app.get('/actors', async (req, res) => {
    try {
        const actors = await Actor.findAll();
        return res.status(200).json(actors);
    } catch (error) {
        console.error("Error getting actors:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/', (req, res) => {
    return res.status(200).json("BASIC NODE API")
});

app.get('/actors/gonzalo',(req,res) => {
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