const express = require('express');
const app = express();

const data = require('./data.json');

const hostname = 'localhost';
const port = 3002;

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.get('/product', (req, res) => {
    console.log(data);
    res.setHeader('Content-Type', 'json');
    res.status(200).end(JSON.stringify(data));
});

// pass by query string
app.get('/product/byID', (req, res) => {
    const id = req.query.id;
    const product = data.find(item => item.id == id);
    res.setHeader('Content-Type', 'json');
    res.status(200).end(JSON.stringify(product));
});

app.get('/product/:id', (req, res) => {
    const id = req.params['id'];
    const product = data.find(item => item.id == id);
    res.setHeader('Content-Type', 'json');
    res.status(200).end(JSON.stringify(product));
});

app.get('/product/search/:from-:to', (req, res) => {
    const priceFrom = parseInt(req.params['from']);
    const priceTo = parseInt(req.params['to']);
    console.log(priceFrom, priceTo);
    const products = data.filter(item => priceFrom <= item.price && item.price <= priceTo);
    res.setHeader('Content-Type', 'json');
    res.status(200).end(JSON.stringify(products));
});

app.listen(port, hostname, () => {
    console.log(`Server express is running at http://${hostname}:${port}`);
});