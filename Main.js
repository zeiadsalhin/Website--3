// image slider
var i = 0;
var images = [];
var time = 5000;

images[0] = "images/m.jpg";
images[1] = "images/m2.jpg";
images[2] = "images/1.jpg";
images[3] = "images/2.jpg";
images[4] = "images/3.png";
images[5] = "images/4.jpg";

function changeimage() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeimage()", time);
}

window.onload = changeimage;

//

// reveal items

window.addEventListener("scroll", reveal);

function reveal() {
  var revealitems = document.querySelectorAll(".reveal");

  for (var i = 0; i < revealitems.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = revealitems[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      revealitems[i].classList.add("active");
    } else {
      revealitems[i].classList.remove("active");
    }
  }
}
