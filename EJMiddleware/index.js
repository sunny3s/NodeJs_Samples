const express = require('express');


var app = express();
app.use(express.json());

var userRoute = require('../EJMiddleware/user');
app.use('/api',userRoute);

app.listen(9014,()=>{
    console.log('server is starting..');
});