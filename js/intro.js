//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#cat-img").hide();
    $("#happy-dog").hide();
    $("#secret-text").hide();


    $("#doggo-img").click(function(){
        $("#doggo-img").hide();
        $("#cat-img").show();

    });

    $("#cat-img").click(function(){
        // $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-dog").show();
    });

    $("#happy-dog").click(function(){
        $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-dog").hide();
    });


    $("#toggle-text").click(function(){
        $("#secret-text").toggle();
        
    });

});