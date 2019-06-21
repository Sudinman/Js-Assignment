
var width = 400;
var container = document.getElementById('carousel-container');

container.style.width = width + 'px';
container.style.overflow = 'hidden';


var image = document.getElementById("image");
var img = Array.from(image.children);


// resizing image
for (var i = 0; i < img.length; i++) {
  img[i].style.height = width + 'px';
  img[i].style.width = width + 'px';
};

var wrapperWidth = img.length * width;
image.style.width = wrapperWidth + 'px';

var margin = 0;
var subMargin = -1;


// image slide and pause

function slide() {
  var timerId = setInterval(function () {
    margin = margin + subMargin;
    if (margin == -(width * 4)) {
      margin = 0;
    }
    if (margin % width == 0) {
      clearInterval(timerId);

      var setId = setTimeout(slide, 2000);
    }
    else {
      image.style.marginLeft = margin + 'px';
    }
  }, 1000 / 60);
}
slide();


// button creation
var buttonLeft = document.createElement('button');

buttonLeft.style.height = 25 + 'px';
buttonLeft.style.width = 50 + 'px';
buttonLeft.style.position = 'absolute';
buttonLeft.style.top = 170 + 'px';
buttonLeft.style.background = 'none';
container.appendChild(buttonLeft);


var buttonRight = document.createElement('button');

buttonRight.style.width = 50 + 'px';
buttonRight.style.height = 25 + 'px';
buttonRight.style.position = 'absolute';
buttonRight.style.top = 170 + 'px';
buttonRight.style.left = 357 + 'px';
buttonRight.style.background = 'none'
container.appendChild(buttonRight);

var buttonBottom = document.createElement('button');

button.bottom.style.height = 500 + 'px';
button.bottom.style.width = 500 + 'px';
button.bottom.style.position = 'absolute';
button.bottom.style.top = 200 + 'px';
button.bottom.style.background = 'none';
container.appendChild(button.bottom);


//Setting Event on button

// nextSlide
buttonRight.onclick = function () {

  margin = margin + (-400);

}

// previousSlide
buttonLeft.onclick = function () {

  margin = margin + 400;

}






