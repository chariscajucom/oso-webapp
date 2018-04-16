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

    /* LIKE NEWS POST */
  router.put('/likeNews', (req, res) => {
    // Check if id was passed provided in request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No id was provided.' }); // Return error message
    } else {
      // Search the database with id
      News.findOne({ _id: req.body.id }, (err, news) => {
        // Check if error was encountered
        if (err) {
          res.json({ success: false, message: 'Invalid news id' }); // Return error message
        } else {
          // Check if id matched the id of a news post in the database
          if (!news) {
            res.json({ success: false, message: 'That news was not found.' }); // Return error message
          } else {
            // Get data from user that is signed in
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: 'Something went wrong.' }); // Return error message
              } else {
                // Check if id of user in session was found in the database
                if (!user) {
                  res.json({ success: false, message: 'Could not authenticate user.' }); // Return error message
                } else {
                  // Check if user who liked post is the same user that originally created the news post
                  if (user.username === news.createdBy) {
                    res.json({ success: false, messagse: 'Cannot like your own post.' }); // Return error message
                  } else {
                    // Check if the user who liked the post has already liked the news post before
                    if (news.likedBy.includes(user.username)) {
                      res.json({ success: false, message: 'You already liked this post.' }); // Return error message
                    } else {
                      // Check if user who liked post has previously disliked a post
                      if (news.dislikedBy.includes(user.username)) {
                        news.dislikes--; // Reduce the total number of dislikes
                        const arrayIndex = news.dislikedBy.indexOf(user.username); // Get the index of the username in the array for removal
                        news.dislikedBy.splice(arrayIndex, 1); // Remove user from array
                        news.likes++; // Increment likes
                        news.likedBy.push(user.username); // Add username to the array of likedBy array
                        // Save news post data
                        news.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'News liked!' }); // Return success message
                          }
                        });
                      } else {
                        news.likes++; // Incriment likes
                        news.likedBy.push(user.username); // Add liker's username into array of likedBy
                        // Save news post
                        news.save((err) => {
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'News liked!' }); // Return success message
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  
    /* DISLIKE NEWS POST */
    router.put('/dislikeNews', (req, res) => {
      // Check if id was passed provided in request body
      if (!req.body.id) {
        res.json({ success: false, message: 'No id was provided.' }); // Return error message
      } else {
        // Search the database with id
        News.findOne({ _id: req.body.id }, (err, news) => {
          // Check if error was encountered
          if (err) {
            res.json({ success: false, message: 'Invalid news id' }); // Return error message
          } else {
            // Check if id matched the id of a news post in the database
            if (!news) {
              res.json({ success: false, message: 'That news was not found.' }); // Return error message
            } else {
              // Get data from user that is signed in
              User.findOne({ _id: req.decoded.userId }, (err, user) => {
                // Check if error was found
                if (err) {
                  res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                } else {
                  // Check if id of user in session was found in the database
                  if (!user) {
                    res.json({ success: false, message: 'Could not authenticate user.' }); // Return error message
                  } else {
                    // Check if user who liked post is the same user that originally created the news post
                    if (user.username === news.createdBy) {
                      res.json({ success: false, messagse: 'Cannot dislike your own post.' }); // Return error message
                    } else {
                      // Check if the user who liked the post has already liked the news post before
                      if (news.dislikedBy.includes(user.username)) {
                        res.json({ success: false, message: 'You already disliked this post.' }); // Return error message
                      } else {
                        // Check if user who liked post has previously disliked a post
                        if (news.likedBy.includes(user.username)) {
                          news.likes--; // Reduce the total number of dislikes
                          const arrayIndex = news.likedBy.indexOf(user.username); // Get the index of the username in the array for removal
                          news.likedBy.splice(arrayIndex, 1); // Remove user from array
                          news.dislikes++; // Increment likes
                          news.dislikedBy.push(user.username); // Add username to the array of likedBy array
                          // Save news post data
                          news.save((err) => {
                            // Check if error was found
                            if (err) {
                              res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                            } else {
                              res.json({ success: true, message: 'News disliked!' }); // Return success message
                            }
                          });
                        } else {
                          news.dislikes++; // Incriment likes
                          news.dislikedBy.push(user.username); // Add liker's username into array of likedBy
                          // Save news post
                          news.save((err) => {
                            if (err) {
                              res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                            } else {
                              res.json({ success: true, message: 'News disliked!' }); // Return success message
                            }
                          });
                        }
                      }
                    }
                  }
                }
              });
            }
          }
        });
      }
    });

    // COMMENT NEWs
    router.post('/comment', (req, res) => {
      // Check if comment was provided in request body
      if (!req.body.comment) {
        res.json({ success: false, message: 'No comment provided' }); // Return error message
      } else {
        // Check if id was provided in request body
        if (!req.body.id) {
          res.json({ success: false, message: 'No id was provided' }); // Return error message
        } else {
          // Use id to search for blog post in database
          News.findOne({ _id: req.body.id }, (err, news) => {
            // Check if error was found
            if (err) {
              res.json({ success: false, message: 'Invalid news id' }); // Return error message
            } else {
              // Check if id matched the id of any blog post in the database
              if (!news) {
                res.json({ success: false, message: 'News not found.' }); // Return error message
              } else {
                // Grab data of user that is logged in
                User.findOne({ _id: req.decoded.userId }, (err, user) => {
                  // Check if error was found
                  if (err) {
                    res.json({ success: false, message: 'Something went wrong' }); // Return error message
                  } else {
                    // Check if user was found in the database
                    if (!user) {
                      res.json({ success: false, message: 'User not found.' }); // Return error message
                    } else {
                      // Add the new comment to the blog post's array
                      news.comments.push({
                        comment: req.body.comment, // Comment field
                        commentator: user.username // Person who commented
                      });
                      // Save blog post
                      news.save((err) => {
                        // Check if error was found
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                        } else {
                          res.json({ success: true, message: 'Comment saved' }); // Return success message
                        }
                      });
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  


return router;
};