const express = require('express');

// Set up environment
const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('./config/config')[ENV];
const app = express();


require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/routes')(app);

// Log incoming request paths for debug info
app.use((req, res, next) => {
    console.log(`Request made to: ${req.path}`);
    return next();
});

// It's alive!
app.get('/api', (req, res) => {
    res.send('{message: "API service is running"}');
});

// Start server
app.listen(config.port, function () {
    console.log(`Server running on port ${config.port}`);
});
