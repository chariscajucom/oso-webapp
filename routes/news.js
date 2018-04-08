const User = require('../models/user'); // Import User Model Schema
const News = require('../models/news');
const jwt = require('jsonwebtoken');

module.exports = (router) => {

    router.post('/createNews', (req, res) => {
      if (!req.body.title) {
        res.json({ success: false, message: "News title is required!" });
      } else {
        if (!req.body.body) {
          res.json({ success: false, message: "News body is required!" });
        } else {
          if (!req.body.createdBy) {
            res.json({ success: false, message: "News creator is required." });
          } else {
            const news = new News({
              title: req.body.title,
              body: req.body.body,
              createdBy: req.body.createdBy
            });
            news.save((err) => {
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
                res.json({ success: true, message: 'News saved!' });
              }
            });
          }
        }
      }
    });

    router.get('/allNews', (req, res) =>{
      News.find({}, (err, news) =>{
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!news) {
            res.json({ success: false, message: 'No news found!' });
          } else {
            res.json ({ success: true, news: news });
          }
        }
      }).sort({ '_id': -1 });
    });

    router.get('/singleNews/:id', (req, res) =>{
      if(!req.params.id){
        res.json({ success: false, message: "No News ID was provided!"});
      }else{
        News.findOne({ _id: req.params.id}, (err, news) => {
          if(err){
            res.json({ success: false, message: "Not a valid OSO News." });
          }else{
            if(!news){
              res.json({ success: false, message: "No News Found!"});
            }else{
              User.findOne({ _id: req.decoded.userId}, (err, user) => {
                if(err){
                  res.json({ success: false, message: err });
                }else{  
                  if(!user){
                    res.json({ success: false, message: "check user authentication"});
                  }else{
                    if(user.username !== news.createdBy){
                      res.json({ success: false, message: "Unauthorized access."});
                    }else{
                      res.json({ success: true, news: news });
                    }
                  }
                }
              });
            }
          }
        });
      }
      
    });

    router.put('/updateNews', (req, res) => {
      if(!req.body._id){
        res.json({ success: false, message: "No ID provided!"});
      }else{
        News.findOne({ _id: req.body._id}, (err, news) => {
          if(err){
            res.json({ success: false, message: "Not a valid news _ID."});
          }else{
            if(!news){
              res.json({ success: false, message: "News Not Found."});
            }else{
              User.findOne({ _id: req.decoded.userId }, (err, user) => {
                if(err){
                  res.json({ success: false, message: err });
                }else{
                  if(!user){
                    res.json({ success: false, message: 'Check user authentication.'});
                  }else{
                    if(user.username !== news.createdBy){
                      res.json({ success: false, message: "Unauthorized access!!!"});
                    }else{
                      news.title = req.body.title;
                      news.body = req.body.body;
                      news.save((err) => {
                        if (err) {
                          if (err.errors) {
                            res.json({ success: false, message: 'Please ensure form is filled out properly' });
                          } else {
                            res.json({ success: false, message: err }); // Return error message
                          }
                        } else {
                          res.json({ success: true, message: 'News Updated!' }); // Return success message
                        }
                      });
                    }
                  }
                }
              });
            }
          }
        });
      }
    });

    router.delete('/deleteNews/:id', (req, res) => {
      // Check if ID was provided in parameters
      if (!req.params.id) {
        res.json({ success: false, message: 'No id provided' }); // Return error message
      } else {
        // Check if id is found in database
        News.findOne({ _id: req.params.id }, (err, news) => {
          // Check if error was found
          if (err) {
            res.json({ success: false, message: 'Invalid id' }); // Return error message
          } else {
            // Check if news was found in database
            if (!news) {
              res.json({ success: false, messasge: 'news was not found' }); // Return error message
            } else {
              // Get info on user who is attempting to delete post
              User.findOne({ _id: req.decoded.userId }, (err, user) => {
                // Check if error was found
                if (err) {
                  res.json({ success: false, message: err }); // Return error message
                } else {
                  // Check if user's id was found in database
                  if (!user) {
                    res.json({ success: false, message: 'Unable to authenticate user.' }); // Return error message
                  } else {
                    // Check if user attempting to delete news is the same user who originally posted the news
                    if (user.username !== news.createdBy) {
                      res.json({ success: false, message: 'You are not authorized to delete this news post' }); // Return error message
                    } else {
                      // Remove the news from database
                      news.remove((err) => {
                        if (err) {
                          res.json({ success: false, message: err }); // Return error message
                        } else {
                          res.json({ success: true, message: 'News deleted!' }); // Return success message
                        }
                      });
                    }
                  }
                }
              });
            }
          }
        });
      }
    });


return router;
};