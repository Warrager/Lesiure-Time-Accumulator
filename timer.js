timer = {time_formatter : 
    function (seconds){
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
    },

    increment_counter : 
    
    function (counter_type, ratio){
        if (counter_type === "work") {
            counter["work"] += 1;
            counter["break"] += ratio;
            $('.counter.work').html(time_formatter(counter["work"]));
            $('.counter.break').html(time_formatter(Math.floor(counter["break"])));
        }
        else if (counter_type === "break") {
            counter["break"] -= 1;
            $('.counter.break').html(time_formatter(Math.floor(counter["break"])));
        }
    }
}








//Displays seconds in a hour:minute:second format
