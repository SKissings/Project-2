//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

    $("#bring").hide();

    $("#Ban").hover(function(){
        $("#Ban").fadeOut("slow");
        $("#bring").show();
    });

    $("#bring").click(function(){
        $("#Ban").fadeIn("slow");
        $("#bring").hide();
    });

    $("#star").rotate({bind:{
        click: function(){
          $(this).rotate({
            angle: 0,
            animateTo:180
            })
          }
        }
      });
});