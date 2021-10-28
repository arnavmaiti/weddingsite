var hearts = ['<img src="images/heart1.png" style="position: fixed; display: none;">',
              '<img src="images/heart2.png" style="position: fixed; display: none;">',
              '<img src="images/heart3.png" style="position: fixed; display: none;">',
              '<img src="images/heart4.png" style="position: fixed; display: none;">'];

var showHearts = () => {
  var interval = setInterval(function(){
      // code
      var idx = randomFromRange(0, hearts.length - 1);
      var heart = $(hearts[idx]).css({top: randomFromRange(0,100) + "%", left: randomFromRange(0,100) + "%"});
      $(".container").append(heart);
      $(heart).show(1000, "linear", () => {
        setTimeout(() => {
          $(heart).hide(1000, "linear", () => {
            $(heart).remove();
          });
        }, 9000);
      });

  }, 3000);
};

var showNav = () => {
  var closeIcon = '<i class="fa-solid fa-bars"></i>';
  $("nav.top-nav>a.open").click(() => {
    var links = $("nav.top-nav>a,nav.top-nav>a:hover,nav.top-nav>a:active");
    if ($(links).css('visibility') == 'hidden') {
      $(links).css({visibility: 'visible'});
      $("nav.top-nav>a.open>i").removeClass('fa-bars').addClass('fa-xmark');
    } else {
      $(links).css({visibility: 'hidden'});
      $("nav.top-nav>a.open").css({visibility: 'visible'});
      $("nav.top-nav>a.open>i").removeClass('fa-xmark').addClass('fa-bars');
    }
  });
}

var randomFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(() => {
  showHearts();
  showNav();
});
