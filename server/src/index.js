const cors = require('cors');
const path = require('path');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

require('./shared')(http);

// Endpoint routers
const resourcesRouter = require('./routes/resources');
const storiesRouter = require('./routes/stories');
const templatesRouter = require('./routes/templates');
// on import everything is set up
require('./routes/stats');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(fileUpload({ createParentPath: true }));

// API endpoints
app.use('/resources', resourcesRouter);
app.use('/templates', templatesRouter);
app.use('/stories', storiesRouter);

app.get('*', (_, res) => res.sendFile(path.join(__dirname, '../build', 'index.html')));

http.listen(8000, () => console.log('Example app listening on port 8000!'));
