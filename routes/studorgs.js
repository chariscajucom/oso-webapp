const StudOrgs = require('../models/studorgs');

module.exports = (router) => {

  router.get('/allOrgs', (req, res) =>{
    StudOrgs.find({}, (err, studorgs) =>{
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

  router.get('/allAcadOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Academics"}, (err, studorgs) =>{
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!studorgs) {
          res.json({ success: false, message: 'No news found!' });
        } else {
          // StudOrgs.find({ "orgtype": "Academics" }).count();
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

  router.get('/allHagonoyOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Hagonoy"}, (err, studorgs) =>{
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

  router.get('/allMenesesOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Meneses"}, (err, studorgs) =>{
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

  router.get('/allSarmientoOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "Sarmiento"}, (err, studorgs) =>{
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

  router.get('/allCAFAOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CAFA"}, (err, studorgs) =>{
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

  router.get('/allCALOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CAL"}, (err, studorgs) =>{
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

  router.get('/allCBAOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CBA"}, (err, studorgs) =>{
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

  router.get('/allCCJEOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CCJE"}, (err, studorgs) =>{
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

  router.get('/allCOEDOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "COED"}, (err, studorgs) =>{
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

  router.get('/allCOEOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "COE"}, (err, studorgs) =>{
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

  router.get('/allCHEOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CHE"}, (err, studorgs) =>{
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

  router.get('/allCITOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CIT"}, (err, studorgs) =>{
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

  router.get('/allCICTOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CICT"}, (err, studorgs) =>{
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

  router.get('/allCONOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CON"}, (err, studorgs) =>{
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

  router.get('/allCOPERSOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "COPERS"}, (err, studorgs) =>{
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

  router.get('/allCSOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CS"}, (err, studorgs) =>{
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

  router.get('/allCSSPOrgs', (req, res) =>{
    StudOrgs.find({ "orgtype": "CSSP"}, (err, studorgs) =>{
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