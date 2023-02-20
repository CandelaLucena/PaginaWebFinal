$(document).ready(function(){
    
    $( ".sortable" ).sortable();
    $("#columnaUno").droppable( {
	});

    $(".card").mouseover(function(){
        $('#columnaUno').animate({transform: "scale(2)"}, 5000, 'linear');
    });

    $(".card").mouseout(function(){
        $('#columnaUno').animate({transform: "scale(1)"}, 5000, 'linear');
    });

});