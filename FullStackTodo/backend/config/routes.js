const mongoose = require('mongoose');

const Todo = require('../models/todoModel');

module.exports = function (app) {

    // Get all todos
    app.get('/api/todos', function (req, res) {
        Todo.find({}).exec(function (err, collection) {
            res.send(collection);
        });
    });

    // Create new todo - ex. json payload: {description: "feed the cat"}
    app.post('/api/todos', (req, res) => {
        const todo = new Todo(req.body);
        if (!req.body.description) {
            res.status(400);
            return res.send('Description is required');
        }
        todo.save();
        res.status(201);
        return res.json(todo);
        console.log(Todo);
    });

    app.put('/api/todos/:id', (req, res) => {
        const id = req.params.id;
        Todo.findByIdAndUpdate(id, req.body)
            .then(todo => {
                if (!todo) {
                    res.status(404);
                    return res.json({message: `unable to update todo ${id}, id not found`});
                }
                console.log(todo);
                console.log(`Updated todo with id: ${id}`);
                res.status(202);
                return res.json({ message: `Updated todo with id: ${id}` });
            })
            .catch(err => {
                return res.send(err);
            });
    });

    // Delete to by id - ex.: /api/todos/60d293873108730581fba1c3
    app.delete('/api/todos/:id', (req, res) => {
        const id = req.params.id;
        Todo.findByIdAndDelete(id)
            .then(todo => {
                if (!todo) {
                    res.status(404);
                    return res.json({message: `unable to delete todo ${id}, id not found`});
                }
                console.log(todo);
                console.log(`Deleted todo with id: ${id}`);
                res.status(202);
                return res.json({ message: `Deleted todo with id: ${id}` });
            })
            .catch(err => {
                return res.send(err);
            });
    });

};