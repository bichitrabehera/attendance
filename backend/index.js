const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 1516;

app.use(cors());

// ========connect sql========

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:""
})

app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})