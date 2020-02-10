const express = require ('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser');
const featuredRouter = require('./routes/featuredRouter');
const userRouter = require('./routes/userRouter');
const foodRouter = require('./routes/fooddRouter');
const housingRouter = require('./routes/housingRouter');
const socializingRouter = require('./routes/socializingRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/featured', featuredRouter);
app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/housing', housingRouter);
app.use('/socializing', socializingRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});