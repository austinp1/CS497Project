//server.js
const bodyParser = require("body-parser");
const path = require('path');
const express = require("express");
const config = require('./Config/config');
const formData = require('express-form-data');


const app = express();
var router = express.Router();

const port = config.port || 8000;
const hostname = config.host || '127.0.0.1';

/********* MIDDLEWARE **********/
app.use(express.json()); // middleware (modifies incoming request data)
router.use(formData.parse());
router.use("/", require("./Routes/routes"));        // Let router handle all requests with the routes defined in /Routes
router.use(bodyParser.urlencoded({extended:true}));

/******** ROUTEHANDLERS ********/
app.use(router);
app.use(express.static("Public"));                  // Serve static files from Public directory


/********* SERVER *********/
app.set('views', path.join(__dirname, 'Views'));    // View engine setup.
app.set('view engine', 'pug');

app.listen(port, hostname, () => {
    console.log(`Front-End server running at http://${hostname}:${port}/`);
});