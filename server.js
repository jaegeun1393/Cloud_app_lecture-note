//curl http:/localhost:8000/lodings or 

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const lodgings = require('./lodingings');

app.get('/lodings', (req, res, next) => {
    res.status(200).send(lodgings);
    //res.status(200).send("These are our lodings.... []\n");
    //next(); move to the next function

});

app.listen(port, () => {
    console.log("== Server is listening on port", port);

});

//download lodgings
