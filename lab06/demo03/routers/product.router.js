const express = require('express');
const router = express.Router();

const data = require('../data.json')

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(data))
});

router.get('/:id', (req, res) => {
    const id = req.params['id'];
    const result_data = data.find(item => item.id == id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(result_data))
});

router.get('/category/:cate', (req, res) => {
    const cate = req.params['cate'];
    const result_data = data.filter(category => category.category == cate);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(result_data))
});

module.exports = router;