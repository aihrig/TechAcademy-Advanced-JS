const mongoose = require('mongoose');

module.exports = function (config) {

    mongoose.connect(config.db);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('todo db opened');
    });

    const Todo = require('../models/todoModel');
    Todo.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Todo.create({description:'Take the dog for a walk', done: false});
            Todo.create({description:'Buy groceries', done: false});
            Todo.create({ description: 'Workout at the gym', done: false });
        }
    });

};
