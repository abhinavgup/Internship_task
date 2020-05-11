
// function

var countdown=document.getElementById('countdown');
$(document).ready(function(){

    var a=$('#inp');

    $("#btn").click(function(){
      
    countdown.innerHTML=a.val();
             
      });

    });

    $.get(
        "file:///C:/Users/Abhinav/Desktop/Internship_task1/index.html",
        function(data){
            countdown.innerHTML=a.val();
        });


var countItDown = function() {
  var currentTime = parseFloat(countdown.textContent);
  if (currentTime < 97) {
    countdown.textContent = currentTime + 0;
  } 
  

};

var timer = window.setInterval(countItDown, 100);


$(function() {

  makeRadial({
    el: $('#radial'),
    radials: 100
  })
});

function makeRadial(options) {
  if (options && options.el) {
    var el = options.el;
    var radials = 60;
    if (options.radials) {
      radials = options.radials;
    }
    var degrees = 360 / radials;
    var i = 0;
    for (i = 0; i < (radials / 2); i++) {
      var newTick = $('<div class="tick"></div>').css({
        '-moz-transform': 'rotate(' + (i * degrees) + 'deg)'
      }).css({
        '-webkit-transform': 'rotate(' + (i * degrees) + 'deg)'
      }).css({
        'transform': 'rotate(' + (i * degrees) + 'deg)'
      })
      el.prepend(newTick);
    }
  }
}




