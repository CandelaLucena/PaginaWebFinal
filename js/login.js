$(document).ready(function(){
    $('.active').animate({
        color: "#34AA62"
    }, 1500);


    $('#passId').mouseout(function(){
        if(($.trim($('#emailId').val()) != '') && ($.trim($('#passId').val()) != '')){
            $('.botonEnviar').animate({
                backgroundColor : "#34AA62" 
            }, 1500);
        }else{
            $('.botonEnviar').animate({
                backgroundColor: "#6C757D"
            }, 1500);
        }
    });
});