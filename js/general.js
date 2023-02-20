$(document).ready(function(){
    $('.active').animate({
        color: "#34AA62"
    }, 1500);
});



document.addEventListener('contextmenu', noClick);
function noClick(event){
    //event.preventDefault();
}  