'use strict';



module.exports = function(app){
    //Register the data models here
    let userModel = require('./models/user');
    let postModel = require('./models/post');
    let carModel = require('./models/car');
    
    //Initialize routes
    let routes = require("./routes/routes");
    routes(app);
}