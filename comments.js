// Create web server

// Import packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Import api
const comments = require('./api/comments');

// Create web server
const app = express();

// Configure web server
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

// Configure routes
app.use('/comments', comments);

// Start web server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});