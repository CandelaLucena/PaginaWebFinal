$(document).ready(function(){
    $('.active').animate({
        color: "#34AA62"
    }, 1500);


    $('#passId').mouseout(function(){
        if(($.trim($('#emailId').val()) != '') && ($.trim($('#passId').val()) != '')){
            console.log("h")
            $('.botonEnviar').animate({
                backgroundColor : "#34AA62" 
            }, 1500);
        }else{
            console.log("o")
            $('.botonEnviar').animate({
                backgroundColor: "#6C757D"
            }, 1500);
        }
    });
});