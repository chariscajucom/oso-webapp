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

  router.get('/allEnvOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Environmental"}, (err, studorgs) =>{
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

  router.get('/allLifeOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Lifestyle"}, (err, studorgs) =>{
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

  router.get('/allPoliOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Political"}, (err, studorgs) =>{
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

  router.get('/allSocioOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Socio-Civic"}, (err, studorgs) =>{
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

  router.get('/allSpiritOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Spiritual and Religious"}, (err, studorgs) =>{
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

  router.get('/allBustosOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Bustos"}, (err, studorgs) =>{
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