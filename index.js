const express = require('express');
let app = express();

const users = [

    {
        id: 1,
        name: "Manga",
        value: 6.5
    },

    {
        id: 2,
        name: "Detergente",
        value: 2.5
    },

    {
        id: 3,
        name: "Leite",
        value: 3.5
    }
]

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
});

app.listen(4000);