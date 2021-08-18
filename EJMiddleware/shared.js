function SetLogInfo(request,response,next){

    var dateTime = SetDateTime();
    var url = request.url;
    var methodNam = request.method
    console.log(`Logged  ${url} ${methodNam}  ${dateTime}`);
    next();
}
function SetDateTime(){

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