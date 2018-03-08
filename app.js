const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const blogs = require('./routes/blog')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('CANNOT CONNECT to database', err);
	} else {

		console.log('CONNECTED to database: ' + config.db);
	}
});

//Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/authentication', authentication);
app.use('/blogs', blogs);

app.get('*', (req, res) => {  // '*' -> only need one route
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
//
app.listen(8080, () => {
	console.log('Listening on port 8080');
});
