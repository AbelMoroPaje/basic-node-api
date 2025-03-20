const express = require("express");
const sequelize = require("./database");
const port = 5555;

const app = express();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});