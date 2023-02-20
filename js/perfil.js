$(document).ready(function(){
    $(".irBorrar").css('background-color','#34AA62')
    $(".irDescripcion").css('background-color','#34AA62')
    $(".irBorrar").css('border-color','#34AA62')
    $(".irDescripcion").css('border-color','#34AA62')
    $( ".sortable" ).sortable();



    $(".irBorrar").mouseover(function(){
        $(this).animate({
            backgroundColor: "#CC6666",
            borderColor: "#CC6666"
        }, 0);
    });

    $(".irBorrar").mouseout(function(){
        $(this).animate({
            backgroundColor: "#34AA62",
            borderColor: "#34AA62"
        }, 0);
    });

    $(".irBorrar").click(function(){
        $(this).parent().parent().parent().remove();
    });

});