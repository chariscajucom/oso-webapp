const News = require('../models/news');

module.exports = (router) => {

    router.get('/allFrontNews', (req, res) =>{
      News.find({}, (err, frontnews) =>{
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!frontnews) {
            res.json({ success: false, message: 'No news found!' });
          } else {
            res.json ({ success: true, frontnews: frontnews });
          }
        }
      }).sort({ '_id': -1 });
    });

return router;
};