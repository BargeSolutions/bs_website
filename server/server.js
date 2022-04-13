const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/build'))

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database conection established succesfully");
})

const projectsRouter = require('./routes/projects');

app.use('/projects', projectsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});