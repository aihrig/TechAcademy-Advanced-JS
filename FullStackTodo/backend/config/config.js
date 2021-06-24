const path = require('path');

const rootPath = path.normalize(__dirname + '../');

module.exports = {
    development: {
        db: 'mongodb://db01.studio.radfx.com/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb+srv://[PROD_SERVER]',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};