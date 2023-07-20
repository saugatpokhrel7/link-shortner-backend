const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
connectToMongo();
const app = express();
app.use(cors());
const port = 5000;
app.use(express.json());
app.use('/api/url', require('./routes/url'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
