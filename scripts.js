$(document).ready(function() {
    var movementStrength = 60;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#background-image").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 45;
              var newvalueY = height * pageY * -1 - 50;
              $('#background-image').css("background-position", newvalueX*3+"px     "+newvalueY+"px");
    });
    });