const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const resourcesRouter = require("./routes/resources");

const app = express();

app.use(cors());
app.use(fileUpload({ createParentPath: true }));
app.use(express.static('static'));

// API Endpoints
app.use("/resources", resourcesRouter);

app.get('/', (_, res) => res.send('Hello World World!'));

app.listen(8000, () => console.log('Example app listening on port 8000!'));
