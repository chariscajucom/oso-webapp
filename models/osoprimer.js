const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const osoprimersSchema = new Schema({
   oso_heading: {type: String, required: true},
   oso_body: {type: String, required: true}
   
});

module.exports = mongoose.model('OsoPrimer', osoprimersSchema); 