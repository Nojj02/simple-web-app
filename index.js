const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

let items = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.get('/items', (req, res) => {
    res.json(items)
});

app.post('/items', (req, res) => {
    const item = {
        itemCode : req.body.itemCode
    }
    items.push(item)
    res.json(item)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))