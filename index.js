const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const { PORT } = require('./config/environment');
const { dbInit } = require('./config/database');

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }));

app.use(express.json())
app.use(routes);

dbInit()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
    });
