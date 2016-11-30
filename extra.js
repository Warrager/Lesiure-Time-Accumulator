
function time_formatter(seconds){
    var negative = "";
    if (seconds < 0){
        seconds *= -1;
        negative = "-";
    }
    var hour = 0, minute = 0, second;
    if (seconds / 3600 >= 1){
        hour = Math.floor(seconds / 3600);
        seconds %= 3600;
    }
    if (seconds / 60 >= 1){ 
        minute = (Math.floor(seconds / 60));
        seconds %= 60;
    }

    minute = padder(minute.toString(), 2);   
    second = padder(seconds.toString(), 2);
    return (negative + hour + ":" + minute + ":" + second);
}


function padder(str, limit){
    if (str.length === limit){
        return str;
    }
    else {
        return padder("0"+str, limit);
    }
}