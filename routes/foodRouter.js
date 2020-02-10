const express = require('express');
const bodyParser = require('body-parser');

const foodRouter = express.Router();
foodRouter.use(bodyParser.json());

foodRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the food content to you');
})
.post((req, res) => {
    res.end(`Will add the food content: ${req.body.name} with description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /food');
})
.delete((req, res) => {
    res.end('Deleting all food content');
});

foodRouter.route('/:foodId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send food item data to you');
})
.post((req, res) => {
    res.end(`Will add the food item: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /foodId');
})
.delete((req, res) => {
    res.end('Deleting food item');
});

module.exports = foodRouter;