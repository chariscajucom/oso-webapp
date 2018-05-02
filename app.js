const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');

const studvalidation = require('./routes/studvalidation')(router);
const osoforms = require('./routes/osoforms')(router);
const osoprimer = require('./routes/osoprimer')(router);
const studorgs = require('./routes/studorgs')(router);
const frontnews = require('./routes/frontnews')(router);
const pdfforms = require('./routes/pdfforms')(router);
const emailwebsite = require('./routes/emailwebsite')(router);
const authentication = require('./routes/authentication')(router);
const news = require('./routes/news')(router);
const activity = require('./routes/activity')(router);

const app = express();

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
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //req.body middleware
app.use(cookieParser());
app.use(express.static(__dirname + '/public')); // Provide static directory for frontend
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
	next();
  });
app.use('/osoprimer', osoprimer);
app.use('/studorgs', studorgs);
app.use('/osoforms', osoforms);
app.use('/studvalidation', studvalidation);
app.use('/frontnews', frontnews);
app.use('/pdfforms', pdfforms);
app.use('/emailwebsite', emailwebsite);
app.use('/authentication', authentication);
app.use('/news', news);
app.use('/activity', activity);

app.get('*', (req, res) => {  // '*' -> only need one route
  res.sendFile(path.join(__dirname + '/public/index.html'));	
});

app.listen(8080, () => {
	console.log('Listening on port 8080');
});