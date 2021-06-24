const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoModel = new Schema({
    description: { type: String },
    done: { type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', todoModel);