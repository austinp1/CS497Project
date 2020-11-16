//server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const formData = require('express-form-data');

const port = 3000;
const app = express();

var router = express.Router();

// Body-parser middleware 
router.use(bodyParser.json());
router.use(formData.parse());
router.use(bodyParser.urlencoded({extended:false}))

// Let router handle all requests with the routes defined in /routes/challenges
router.use("/", require("./routes/challenges"));
app.use(router);

// Serve static files from public directory
app.use(express.static("public"));

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Start the server
app.listen(port,function() {console.log("server.js: Challenges server listening on port: " + port);});

