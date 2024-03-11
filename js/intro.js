//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#Ban").hide();


    $("#Ban").hover(function(){
        $("#Ban").fadeOut();
    });

    $("#Ban").hover(function(){
        $("#Ban").fadeIn();
    });

});