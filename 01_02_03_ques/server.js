require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

const PORT = process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const studentRouter = require('./Routes/StudentRoute');
app.use('/student', studentRouter);

app.listen(PORT, () => {
    console.log(`port is listning in the ${PORT}`);
});
