const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
    studnum: { type: String, required: true, unique: true },
    studname: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Students', studentsSchema); 