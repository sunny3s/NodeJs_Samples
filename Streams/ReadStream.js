const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(request,response)=>{
    /*
    fs.readFile('data.txt',(error,data)=>{
        if(error)
          console.log(error);

        response.end(data);
    });*/

    var fileData = '';
    var readStream = fs.createReadStream('data.txt');

    readStream.on("data",(chunkdata)=>{
        console.log('chunk data reading...');

        fileData += chunkdata;
    });

    readStream.on("end",()=>{
        response.end(fileData);
    });
});

server.listen(3000);
