const Activity = require('../models/activity');


module.exports = (router) => {
    router.post('/createActivity', (req, res) => {
        if (!req.body.title) {
          res.json({ success: false, message: " title is required!" });
        } else {
          if (!req.body.venue) {
            res.json({ success: false, message: " body is required!" });
          } else {
              const activity = new Activity({
                title: req.body.title,
                body: req.body.body
              });
              activity.save((err) => {
                if (err) {
                  if (err.errors) {
                    if (err.errors.title) {
                      res.json({ success: false, message: err.errors.title.message });
                    } else {
                      if (err.errors.body) {
                        res.json({ success: false, message: err.errors.body.message });
                      } else {
                        res.json({ success: false, message: err.errmsg });
                      }
                    }
                  } else {
                    res.json({ success: false, message: err });
                  }
    
                } else {
                  res.json({ success: true, message: 'Activity saved!' });
                }
              });
            }
          }
      });
      return router;
}
