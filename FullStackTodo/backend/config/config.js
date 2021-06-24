const path = require('path');

const rootPath = path.normalize(__dirname + '../');

module.exports = {
    development: {
        db: process.env.TODO_DB,
        rootPath: rootPath,
        port: 3030
    },
    production: {
        db: process.env.TODO_DB,
        rootPath: rootPath,
        port: 80
    }
};