const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const path = require('path')
const fs = require('fs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors())



app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   