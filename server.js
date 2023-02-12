const express = require('express');
const ex = express();
const cors = require('cors');
const port = 3000;
const router = require('./routes/index');


ex.use(cors());
ex.use(express.json());
ex.use(express.urlencoded({ extended: true }));

ex.get('/', (req, res) => {
    res.send('Hello World!');
});

ex.use(router);

ex.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});