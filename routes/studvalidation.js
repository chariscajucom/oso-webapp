const Student = require('../models/students');
const config = require('../config/database');

module.exports = (router) => {

router.post('/studentvalid', (req, res) => {
    if(!req.body.studnum){
        res.json({ success: false, message: "No Student number provided!" });
    }else{
       if(!req.body.studname){
        res.json({ success: false, message: "No Student Name Provided."});
       } else{
        Student.findOne({ studnum: req.body.studnum }, (err, student)=>{
            if(err){
                res.json({ success: false, message: err });
            } else{
               if(!student){
                   res.json({ success: false, message: 'Student Number not found.'});
               } else {
                 Student.findOne({ studname: req.body.studname }, (err, student) => {
                    if(err){
                        res.json({ success:false, message: err });
                    } else{
                        if(!student){
                            res.json({ success: false, message: "Student Name not found."});
                        } else{
                            res.json({ success: true, message: 'Successfully validated!' });
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
}
