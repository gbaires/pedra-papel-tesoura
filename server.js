const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('src'));

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

app.listen(3001);