'use strict';

const express = require('express');
require('dotenv').config()
const app = express();
app.use(express.json()); // to decrypt data actually parses the payload coming from the request inside the body so we can perform operations

const PORT = process.env.PORT || 3001;
// Initializing the server port
function start() {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
}

// Table 1 - to make the >> food << table routers usable
const foodRouter = require('./routes/food.route');
app.use(foodRouter);

// Table 2 - to make the >> clothes << table routers usable
const clothesRouter = require('./routes/clothes.route');
app.use(clothesRouter);

module.exports = { app, start }
