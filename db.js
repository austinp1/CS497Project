// db.js
require('dotenv').config();
const mongoose = require("mongoose");
const url = process.env.DATABASE_URL || "mongodb+srv://ampinto:n6u7V5wxoPmr6piX@cluster0.l4vjr.mongodb.net/challenges";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => console.log("db.js error: " + error));;

mongoose.connection.on('connected', function(){
    console.log("db.js: Connected to MongoDB");
});

module.exports = mongoose;
