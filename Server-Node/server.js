/**
 * Use 'express' framework for developing endpoints
 * Use MongoDB for the database
 * Use body-parser to interpret the requests
*/
let express = require('express'),
              app = express(),
              port = process.env.PORT || 3000, 
              mongoose = require('mongoose'),
              bodyParser = require('body-parser');

//Connect to local MongoDB collection Assignment8
mongoose.connect('mongodb://localhost:27017/final-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;



//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
let initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);