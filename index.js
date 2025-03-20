const express = require("express");
const sequelize = require("./database");
const Actor = require("./model/actor")(sequelize)
const port = 5555;

const app = express();

app.get('/actores', async (req, res) => {
    try {
        const actores = await Actor.findAll();
        return res.status(200).json(actores);
    } catch (error) {
        console.error("Error getting actors:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/', (req, res) => {
    return res.status(200).json("BASIC NODE API")
});

app.get('/actores/gonzalo',(req,res) => {
    const Gonzalo = Actor.build({
        Nombre: "Gonzalo",
        Apellido: "Cano",
        Nacionalidad: "Español",
      });  

      return res.status(200).json(Gonzalo.toJSON());
});

app.get('/actores/gonzalobd', async (req, res) => {
    const transaction = await sequelize.transaction(); 

    try {
        const Gonzalo = await Actor.create({ 
            Nombre: "Gonzalo",
            Apellido: "Cano",
            Nacionalidad: "Español",
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