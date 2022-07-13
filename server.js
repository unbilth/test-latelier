"use strict";
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)

app.listen(3000, () => {
    console.log('Server port : 3000');
})