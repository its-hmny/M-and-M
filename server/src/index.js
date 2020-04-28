const express = require('express');
const app = express();

app.get('/', (_, res) => res.send('Hello World World!'));
app.listen(8000, () => console.log('Example app listening on port 3000!'));
