const cors = require('cors');
const path = require('path');
const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const io = require('./shared')(http);

// Endpoint routers
const resourcesRouter = require('./routes/resources');
const storiesRouter = require('./routes/stories');
const statsRouter = require('./routes/stats');
const templatesRouter = require('./routes/templates');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(fileUpload({ createParentPath: true }));

// API endpoints
app.use('/resources', resourcesRouter);
app.use('/templates', templatesRouter);
app.use('/stories', storiesRouter);
app.use('/stats', statsRouter);

app.get('/', (_, res) => res.sendFile(path.join(__dirname, '../build', 'index.html')));

http.listen(8000, () => console.log('Example app listening on port 8000!'));
