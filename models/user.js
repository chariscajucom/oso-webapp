const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let emaillengthchecker = (email) => {
  if (!email) {
    return false;
  }  else {
    if (email.length < 5 || email.length > 30){
      return false;
    } else{
      return true;
    }
  }
};

let validEmailchecker = (email) => {
if (!email) {
  return false;
 } else{
  const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  return regExp.test(email);
 }
};

const emailvalidators = [
{
  validator: emaillengthchecker,
  message: "Email must be more than 5 characters or less than 30."
},
{
  validator: validEmailchecker,
  message: "Must be a VALID email."
}
];

let usernameLengthChecker = (username) => {
  if (!username) {
    return false;
  } else {
    if (username.length < 5 || username.length > 30 ) {
      return false;
    } else {
      return true;
    }
  }
};

let validUsernameChecker = (username) => {
  if (!username) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z\-]+$/);
    return regExp.test(username);
  }
};

const usernameValidators = [
  {
    validator: usernameLengthChecker,
    message: "USERNAME must be more than 5 characters or less than 30"
  },
  {
    validator: validUsernameChecker,
    message: "USERNAME is not valid. Characters and Numbers only."
  }
];

let passwordLengthChecker = (password) => {
  if (!password) {
    return false;
  } else{
    if (password.length < 8 || password.length > 35) {
      return false;
    } else {
      return true;
    }
  }
};

let validPasswordChecker = (password) => {
  if (!password) {
    return false;
  } else {
    const regExp = new RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);
    return regExp.test(password);
  }
};

const passwordValidators = [{
  validator: passwordLengthChecker,
  message: "PASSWORD must be more than 8 characters or less than 35."
}, {
  validator: validPasswordChecker,
  message: "PASSWORD must contain atleast one number, lowercase, uppercase and characters."
}];

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, validate: emailvalidators },
    username: { type: String, required: true, unique: true, lowercase: true, validate: usernameValidators },
    password: { type: String, required: true, validate: passwordValidators}

  });

//middleware for the schema for encrypting password
userSchema.pre('save', function(next){
  if (!this.isModified('password'))
    return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });

  userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }

 module.exports = mongoose.model('User', userSchema);
