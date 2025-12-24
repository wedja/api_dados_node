const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});

app.get('/api/users', (req, res) => {
    const users = [{
        id: '123',
        name: 'Shaum',
    }, {
        id: '234',
        name: 'Bob',
    }, {
        id: '345',
        name: 'Suelen',
    }];

    res.json(users);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});

