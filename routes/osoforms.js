const OsoForms = require('../models/osoforms');

module.exports = (router) => {

  router.get('/allEBForms', (req, res) =>{
    OsoForms.find({ "form_type": "EBApp"}, (err, osoforms) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!osoforms) {
          res.json({ success: false, message: 'No forms found!' });
        } else {
          res.json ({ success: true, osoforms: osoforms });
        }
      }
    });
  });

  router.get('/allRenewalForms', (req, res) =>{
    OsoForms.find({ "form_type": "Renewal"}, (err, osoforms) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!osoforms) {
          res.json({ success: false, message: 'No forms found!' });
        } else {
          res.json ({ success: true, osoforms: osoforms });
        }
      }
    });
  });
  
  router.get('/allRERForms', (req, res) =>{
    OsoForms.find({ "form_type": "RER"}, (err, osoforms) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!osoforms) {
          res.json({ success: false, message: 'No forms found!' });
        } else {
          res.json ({ success: true, osoforms: osoforms });
        }
      }
    });
  });

  router.get('/allSampleLettersForms', (req, res) =>{
    OsoForms.find({ "form_type": "Sample Letters"}, (err, osoforms) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!osoforms) {
          res.json({ success: false, message: 'No forms found!' });
        } else {
          res.json ({ success: true, osoforms: osoforms });
        }
      }
    });
  });

  router.get('/allOUForms', (req, res) =>{
    OsoForms.find({ "form_type": "CC-OU"}, (err, osoforms) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!osoforms) {
          res.json({ success: false, message: 'No forms found!' });
        } else {
          res.json ({ success: true, osoforms: osoforms });
        }
      }
    });
  });

  router.get('/allSCForms', (req, res) =>{
    OsoForms.find({ "form_type": "CC-SC"}, (err, osoforms) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!osoforms) {
          res.json({ success: false, message: 'No forms found!' });
        } else {
          res.json ({ success: true, osoforms: osoforms });
        }
      }
    });
  });

  router.get('/allWUForms', (req, res) =>{
    OsoForms.find({ "form_type": "CC-WU"}, (err, osoforms) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!osoforms) {
          res.json({ success: false, message: 'No forms found!' });
        } else {
          res.json ({ success: true, osoforms: osoforms });
        }
      }
    });
  });

  return router;
}
