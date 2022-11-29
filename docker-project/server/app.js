const express = require('express');
require('dotenv').config();
const port = process.env.PORT || '8000';

const app = express();

app.use('/', (req, res) => {
	res.status(200).send('Hello from Docker!!');
});

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
