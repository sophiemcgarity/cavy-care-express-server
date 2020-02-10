const express = require('express');
const bodyParser = require('body-parser');

const housingRouter = express.Router();
housingRouter.use(bodyParser.json());

housingRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the housing content to you');
})
.post((req, res) => {
    res.end(`Will add the housing content: ${req.body.name} with description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /housing');
})
.delete((req, res) => {
    res.end('Deleting all housing content');
});

housingRouter.route('/:housingId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send housing item data to you');
})
.post((req, res) => {
    res.end(`Will add the housing item: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /housingId');
})
.delete((req, res) => {
    res.end('Deleting housing item');
});

module.exports = housingRouter;