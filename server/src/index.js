const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.static('static'));

app.get('/', (_, res) => res.send('Hello World World!'));

app.listen(8000, () => console.log('Example app listening on port 8000!'));
