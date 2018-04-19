const PdfForms = require('../models/pdfforms');

module.exports = (router) => {

    router.get('/allForms', (req, res) =>{
        PdfForms.find({}, (err, pdfforms) =>{
          if (err) {
            res.json({ success: false, message: err });
          } else {
            if (!pdfforms) {
              res.json({ success: false, message: 'No forms found!' });
            } else {
              res.json ({ success: true, pdfforms: pdfforms });
            }
          }
        });
      });

    return router;
}
