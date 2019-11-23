'use strict';

module.exports = function(app){
    const userController = require('../controllers/userController');
    const postController = require('../controllers/postController');

    app.route('/user/:id')
        .get(userController.get) //Fetch one user
        .put(userController.put) //Update one user
        .delete(userController.delete); //Delete one user

    app.route('/post/:id')
        .get(postController.get) //Fetch one post
        .put(postController.put) //Update one post
        .delete(postController.delete); //Delete one post
};