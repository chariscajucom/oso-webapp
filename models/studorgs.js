const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const studorgsSchema = new Schema({
    acronym: {type: String, required: true},
    orgname: {type: String, required: true},
    orgdesc: {type: String, required: true},
    orgadviser: {type: Array },
    orgpres: {type: String, required: true},
    orgemail: {type: String, required: true},
    orghq: {type: String, required: true},
    orgsocial: {type: String, required: true},
    orgtype: {type: String, required: true},
    orglogo: {type: String, required: true}
});

module.exports = mongoose.model('StudOrgs', studorgsSchema); 