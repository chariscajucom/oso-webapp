const StudOrgs = require('../models/studorgs');

module.exports = (router) => {

  router.get('/allAcadOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Academics"}, (err, studorgs) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!studorgs) {
          res.json({ success: false, message: 'No news found!' });
        } else {
          res.json ({ success: true, studorgs: studorgs });
        }
      }
    });
  });

  router.get('/allFratOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Fraternities"}, (err, studorgs) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!studorgs) {
          res.json({ success: false, message: 'No news found!' });
        } else {
          res.json ({ success: true, studorgs: studorgs });
        }
      }
    });
  });

    return router;
}