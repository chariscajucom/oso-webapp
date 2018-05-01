const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const osoformsSchema = new Schema({
   form_name: {type: String, required: true},
   form_type: {type: String, required: true},
   form_link: {type: String, required: true},
   form_thumb: {type: String, required: true}
});

module.exports = mongoose.model('OsoForms', osoformsSchema); 