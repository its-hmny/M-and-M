const cors = require('cors');
const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// Endpoint routers
const resourcesRouter = require('./routes/resources');
const storiesRouter = require('./routes/stories');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(fileUpload({ createParentPath: true }));

io.on('connection', socket => {
  socket.on('chat-msg-send', payload => io.emit('chat-msg-recv', payload));
});

// API endpoints
app.use('/resources', resourcesRouter);
app.use('/stories', storiesRouter);

app.get('/', (_, res) => res.send('Hello World from M&M server!'));

http.listen(8000, () => console.log('Example app listening on port 8000!'));
