const express = require("express");
const sequelize = require("./database");
const port = 5555;

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json("BASIC NODE API")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 