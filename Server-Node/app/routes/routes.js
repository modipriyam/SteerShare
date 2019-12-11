'use strict';

module.exports = function(app){
    const userController = require('../controllers/userController');
    const postController = require('../controllers/postController');
    const carController = require('../controllers/carController');
    const rideController = require('../controllers/rideController');

    app.route('/user/:id')
        .get(userController.get) //Fetch one user
        .put(userController.put) //Update one user
        .delete(userController.delete); //Delete one user

    app.route('/posts/:id')
        .get(postController.get); //Fetch single post

    app.route('/posts')
        .get(postController.search) //Fetch one post
        .post(postController.post);

    app.route('/users/authenticate')
        .post(userController.authenticate);
    
    app.route('/users/register')
        .post(userController.register);
    
    app.route('/users/uploadProfileImage')
        .post(userController.upload, userController.uploadRes);
    
    app.route('/users/profileImg/:filename')
        .get(userController.image); 

    app.route('/cars')
        .post(carController.add) //Add cars
        .put(carController.update); //Update cars
    
    app.route('/cars/:id')
        .get(carController.get); //Get particular car

    app.route('/rides')
        .post(rideController.add); //Add ride

   

    app.route('/rides/:id')
        .get(rideController.get) //Fetch one booking
        .delete(rideController.delete); //Delete one booking

    app.route('/rides/user/:username')
        .get(rideController.getUserRides);

    app.route('/chat')
        .post(chatController.post);

    app.route('/chat/:name')
        .get(chatController.get);

    app.route('/chat/:room')
        .get(chatController.getroom);

  
    
};