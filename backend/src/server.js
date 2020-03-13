const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(cors());
app.use(routes);

app.listen(3000);