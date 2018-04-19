const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const pdfformsSchema = new Schema({
    pdffile: { type: String, required: true },
    originalname: { type: String, required: true }
});

module.exports = mongoose.model('PdfForms', pdfformsSchema); 