var numberOffruitsButtons = document.querySelectorAll(".fruits").length;

for (var i = 0; i < numberOffruitsButtons; i++) {

  document.querySelectorAll(".fruits")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    this.classList.add("pressed");

    setTimeout(() => {
      this.classList.remove("pressed");
    }, 100);

    replaceImageAndtext(buttonInnerHTML);

    description(buttonInnerHTML);
  });

}


// function buttonAnimation(currentKey) {
//
//   var activeButton = document.querySelector("." + currentKey);
//
//   activeButton.classList.add("pressed");
//
//   setTimeout(function() { // it means wait for 1 second then run "activeButton.classList.remove("pressed");""
//     activeButton.classList.remove("pressed");
//   }, 100);
//
// }




// go to info window

$(".fruits").click(function() {
  hideOrShow();
});

function hideOrShow() {
  var x = $(".secondLayer");
  if (x.css("display") === "none") {
    $(".firstLayer").css("display", "none");
    x.css("display", "block");
  } else {
    x.css("display", "none");
  }
}



const replaceImageAndtext = (imgSrc) => {

  $('.fruitImg').append(imgSrc);
  // cut the string and put the fruit name in the info-box
  var firstChar = imgSrc.indexOf("/") + 1;
  var lastChar = imgSrc.indexOf("_");
  var fruitName = imgSrc.slice(firstChar, lastChar);
  $(".info-box h4").text(fruitName);
}

function description(imgSrc) {

  var firstChar = imgSrc.indexOf("/") + 1;
  var lastChar = imgSrc.indexOf("_");
  var fruitName = imgSrc.slice(firstChar, lastChar);

  document.getElementById(fruitName).style.display = "inline";
}
