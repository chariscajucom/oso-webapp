const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    title: {type: String, required: true},
    venue: {type: String, required: true},
    starttime: {type: Date },
    endtime: {type: Date },
    noofstudents: {type: String },
    objective: {type: String },
    description: {type: String },
    status: {type: String, default: 'pending'},
    datasubmitted: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Activity', activitySchema); 