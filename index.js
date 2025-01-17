const express = require('express');
let app = express();
let cors = require('cors');

const users = [

    {
        id: 1,
        name: "pera",
        value: 9.5
    },

    {
        id: 2,
        name: "Detergente",
        value: 2.5
    },

    {
        id: 3,
        name: "café",
        value: 3.5
    },

    {
        id: 4,
        name: "suco",
        value: 5.5
    }
]

app.use(cors())

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
});

app.listen(4000);