const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function (app) {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};