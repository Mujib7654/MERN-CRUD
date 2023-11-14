const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/connectDB');
const createBookRouter = require('./routes/createBooks');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', createBookRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});