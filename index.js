const mysql = require("mysql2");
const express = require("express");

const port = 5555;

const app = express();

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})