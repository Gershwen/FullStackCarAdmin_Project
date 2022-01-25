const cars = require("./routes/cars");
const connection = require('./db');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//calling the connection to database function here
connection();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/cars", cars);

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Listening on port ${port}...`))


