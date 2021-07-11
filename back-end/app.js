const express = require('express');
var Servicedata = require('./src/models/servicedata');
const dataservice = require('./src/db/data.json');
const cors = require('cors');
var multer  = require('multer');
var bodyParser= require('body-parser');
var app = new express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
const upload = require('express-fileupload');
const fs = require("fs");
app.use(upload());
app.use(express.static('upload'))
app.use(express.static('./public'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));



// for inserting data to database from json FileList. commented the code after inserting 

// var data= JSON.stringify(dataservice);
// var mydata = JSON.parse(data);
// for (let i = 0; i < mydata.length; i++) {
//     item={
//     name: mydata[i].name,
//     description: mydata[i].description,
//     imagepath: mydata[i].imagepath 
//     }
//     var Service= new Servicedata(item);
//     Service.save();
//     console.log(Service)
// }



// listout services 
app.get("/services",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    Servicedata.find()
    .then(function(service){
        res.send(service);
    });

});


// view service 
app.get("/view/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const id = req.params.id;
        Servicedata.findOne({_id:id})
        .then(data=>{
                res.send(data);
            });  
});


// edit service 


app.post("/edit/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const id = req.params.id;
    var item = {       
        name : req.body.Servicedata.name,
        description : req.body.Servicedata.description,
        imagepath: req.body.Servicedata.imagepath
       } 
        console.log(item)
       Servicedata.findByIdAndUpdate(id,{name:item.name,description:item.description,imagepath:item.imagepath})
       .then(Service=>{
        console.log("done");
       })  

});



// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, 'uploads')
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `FunOfHeuristic_${file.originalname}`)
//     }
//   })
// const uploads = multer({ storage: storage })
// app.post('/file', uploads.single('x'), (req, res, next) => {
//     const file = req.file;
//     // console.log(file);
//     if (!file) {
//       const error = new Error('No File')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(file);
//   })


app.listen(3000, function(){
    console.log('listening to port 3000');
}); 
