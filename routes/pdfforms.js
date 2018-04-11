const multer = require('multer');
const path = require('path');

const store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});

const upload = multer({ storage: store }).single('file');

module.exports = (router) => {
    router.post('/pdfUpload', function(req,res,next){
      upload(req,res, function(err){
        if(err){
            return res.status(501).json({error:err});  
        }
        //do all saving activity database here
        res.json({originalname: req.file.originalname, uploadname: req.file.filename});
      });      
    });

    router.post('/pdfDownload', function(req, res, next){
        filepath = path.join(__dirname,'../uploads')+ '/'+ req.body.filename;
        res.sendFile(filepath);
    });

    return router;
}