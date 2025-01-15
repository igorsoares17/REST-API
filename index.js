const express = require('express');
let app = express();

const users = [

    {
        id: 1,
        name: "Pablo",
        age: 20
    },

    {
        id: 2,
        name: "Jorge",
        age: 30
    },

    {
        id: 3,
        name: "Amanda",
        age: 40
    }
]

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
});

app.listen(4000);