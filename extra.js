
function time_formatter(seconds, deca_seconds = false){
    var add_on = "";
    if (deca_seconds){
        add_on = seconds.toString().slice(-1);
        seconds = Math.floor(seconds / 10);
    }
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
    var return_str = negative + hour + ":" + minute + ":" + second;
    if (!deca_seconds){
        return return_str;
    }
    return (return_str + ":" + add_on);
}


function padder(str, limit){
    if (str.length === limit){
        return str;
    }
    else {
        return padder("0"+str, limit);
    }
}