
//Checks if inputted value is an int
var num_arr = ['1','2','3','4','5','6','7','8','9','0'];
$('input').on('input', function(){
    var input = $(this).val();
    if (input.length > 2){
        $(this).val(input.slice(input.length - 2));
    }
    for (var x = 0, y = input.length; x < y; x++){
        if (num_arr.indexOf(input[x]) === -1){
            $(this).val("");
            //return;
        }
    }
    var x = parseInt($('#ratio-break').val());
    var y = parseInt($('#ratio-work').val());
});