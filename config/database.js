const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
	uri: 'mongodb://teamglecc:iloveuling123@ds235609.mlab.com:35609/bulsu-oso',
	secret: crypto,
	db: 'bulsu-oso'
};