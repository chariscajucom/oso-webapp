// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// const Schema = mongoose.Schema;

// // const PdfPrinter = require('pdfmake');
// // const printer = new PdfPrinter(fonts);
// // const fs = require('fs');

// // const docDefinition = {
// // 	content: [
// // 		'First paragraph',
// // 		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
// // 	]
// // };

// // const pdfDoc = printer.createPdfKitDocument(docDefinition);
// // pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
// // pdfDoc.end();


// const transactionSchema = new Schema({
//     orgid: { type: String, required: true, unique: true },
//     activityid: { type: String, required: true, unique: true }
// });

// module.exports = mongoose.model('Students', studentsSchema); 