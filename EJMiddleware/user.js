const { json } = require('express');
const express = require('express');
var router = express.Router();
//var sharedFiles = require('./shared');

const users = [
                {'Id':1,'Name':'User1','Email':'user1@gmail.com'},
                {'Id':2,'Name':'User2','Email':'user2@gmail.com'}
              ];

//router.use(SetLogInfo);

router.use(function (req, res, next) {
    var dateTime = SetDateTime();
    var url = req.url;
    var methodNam = req.method
    console.log(`Logged start ${url}  ${methodNam}  ${dateTime}`);

    res.on("finish",()=>{
        console.log(`Logged end   ${url}  ${methodNam}  ${dateTime}`);
    })

    next();
  });
//sharedFiles.SetLogInfo();

//http://localhost:9014/api/users
router.get('/users',(req,res)=>{
    res.send(users);
});

//http://localhost:9014/api/users
router.post('/users',(req,res)=>{
    req.body.forEach(element => {
        users.push(element);
    });
    res.send(users);
});

let SetLogInfo = function (req, res, next) {
    var dateTime = SetDateTime();
    var url = request.url;
    var methodNam = request.method
    console.log(`Logged  ${url} ${methodNam}    ${dateTime}`);
    next()
}

let SetDateTime = function(){
    var date=new Date();  
    var day=date.getDate();  
    var month=date.getMonth()+1;  
    var year=date.getFullYear();
    var hh = date.getHours();
    var mm =  date.getMinutes();
    var ss = date.getSeconds();
    var dd = month+"/"+day+"/"+year;
    var time =  hh+":"+mm+":"+ss;

    dateInfo = dd+" "+time;
    return dateInfo;
}

module.exports = router;