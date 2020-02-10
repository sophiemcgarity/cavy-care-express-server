const express = require('express');
const bodyParser = require('body-parser');

const socializingRouter = express.Router();
socializingRouter.use(bodyParser.json());

socializingRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the socializing content to you');
})
.post((req, res) => {
    res.end(`Will add the socializing content: ${req.body.name} with description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /socializing');
})
.delete((req, res) => {
    res.end('Deleting all socializing content');
});

socializingRouter.route('/:socializingId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send socializing item data to you');
})
.post((req, res) => {
    res.end(`Will add the socializing item: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /socializingId');
})
.delete((req, res) => {
    res.end('Deleting socializing item');
});

module.exports = socializingRouter;