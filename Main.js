// image slider
var i = 0;
var images = [];
var time = 3000;

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
