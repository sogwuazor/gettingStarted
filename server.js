require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//web folder is my root
app.use(express.static('web'));

app.use('/scripts', express.static(`${__dirname}/node_modules/`));

app.listen(port, function() {
	console.log('Listening on %d', port);
});
