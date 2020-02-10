const express = require('express');
const bodyParser = require('body-parser');

const featuredRouter = express.Router();
featuredRouter.use(bodyParser.json());

featuredRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the featured content to you');
})
.post((req, res) => {
    res.end(`Will add the featured content: ${req.body.name} with description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /featured');
})
.delete((req, res) => {
    res.end('Deleting all featured content');
});

featuredRouter.route('/:featuredId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send featured item data to you');
})
.post((req, res) => {
    res.end(`Will add the featured item: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /featuredId');
})
.delete((req, res) => {
    res.end('Deleting featured item');
});

module.exports = featuredRouter;