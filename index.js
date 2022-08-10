const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes');

const { PORT } = require('./config/environment');
const { dbInit } = require('./config/database');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.post('/register', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('This has CORS enabled');
})
app.use(routes);

dbInit()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
    });
