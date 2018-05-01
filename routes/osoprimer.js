const OsoPrimer = require('../models/osoprimer');

module.exports = (router) => {

    router.get('/getAllcontent', (req, res) =>{
        OsoPrimer.find({}, (err, osoprimers) =>{
          if (err) {
            res.json({ success: false, message: err });
          } else {
            if (!osoprimers) {
              res.json({ success: false, message: 'No primer found!' });
            } else {
              res.json ({ success: true, osoprimers: osoprimers });
            }
          }
        });
      });
    
  return router;
}
