const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let titleLengthChecker = (title) => {
  if (!title) {
    return false;
  }  else {
    if (title.length < 5 || title.length > 50){
      return false;
    } else{
      return true;
    }
  }
};

let alphaNumericChecker = (title) => {
if (!title) {
  return false;
 } else{
  const regExp = new RegExp(/^[a-zA-Z0-9 ]*$/);
  return regExp.test(title);
 }
};

const titleValidators = [
{
  validator: titleLengthChecker,
  message: "Title must be more than 5 characters but less than 50."
},
{
  validator: alphaNumericChecker,
  message: "Title must be alphanumeric."
}
];

let bodyLengthChecker = (body) => {
  if (!body) {
    return false;
  } else {
    if (body.length < 15 || body.length > 500 ) {
      return false;
    } else {
      return true;
    }
  }
};

const bodyValidators = [
  {
    validator: bodyLengthChecker,
    message: "Surely you can write something longer than that, right?"
  }
];

let commentLengthChecker = (comment) => {
  if (!comment[0]) {
    return false;
  } else{
    if (comment[0].length < 1 || comment[0].length > 200) {
      return false;
    } else {
      return true;
    }
  }
};

const commentValidators = [
  {
    validator: commentLengthChecker,
    message: "Comment exceeds 200 characters"
  }
];

const newsSchema = new Schema({
 title: {
   type: String,
   required: true,
   validate: titleValidators
  },
 body: {
   type: String,
   required: true,
   validate: bodyValidators
  },
 createdBy: {
  type: String
  },
 createdAt: {
   type: Date,
   default: Date.now()
  },
 likes: {
   type: Number,
   default: 0
  },
 likedBy: {
  type: Array
  },
 dislikes: {
   type: Number,
   default: 0
  },
 dislikedBy: {
   type: Array
  },
 comments: [
   {
     comment: {
     type: String,
     validate: commentValidators
   },
     commentator: {
      type: String
    }
   }
]
});

 module.exports = mongoose.model('News', newsSchema);