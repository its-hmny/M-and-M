const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// Endpoint routers
const resourcesRouter = require('./routes/resources');
const storiesRouter = require('./routes/stories');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(fileUpload({ createParentPath: true }));

// API endpoints
app.use('/resources', resourcesRouter);
app.use('/stories', storiesRouter);

app.get('/', (_, res) => res.send('Hello World from M&M server!'));

app.listen(8000, () => console.log('Example app listening on port 8000!'));
