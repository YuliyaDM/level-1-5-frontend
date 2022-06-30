"use strict";
exports.__esModule = true;
var moment = require("moment");
var button = document.querySelector(".button");
var minus = document.querySelector(".button-minus");
var plus = document.querySelector(".button-plus");
var time = document.querySelector(".time-number");
var timeLeft = document.querySelector(".d1");
var tellMeTime = document.querySelector(".d0");
console.log(moment());
console.log(button);
console.log(button === null || button === void 0 ? void 0 : button.style);
function showTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var second = seconds - minutes * 60;
  if (minutes === 0) {
    if (second === 0) {
      return "00:00";
    } else {
      if (second < 10) {
        return "00:0".concat(second);
      } else {
        return "00:".concat(second);
      }
    }
  } else {
    if (minutes < 10 && second < 10) {
      return "0".concat(minutes, ":0").concat(second);
    }
    if (minutes < 10 && second > 10) {
      return "0".concat(minutes, ":").concat(second);
    }
    if (minutes > 10 && second < 10) {
      return "".concat(minutes, ":0").concat(second);
    }
    if (minutes > 10 && second > 10) {
      return "".concat(minutes, ":").concat(second);
    }
  }
}
button.addEventListener("click", function () {
  startTimer();
});
function checkSizeOfTimeNumber() {
  var timeNumber = time;
  var width =
    (100 -
      parseInt(window.getComputedStyle(timeNumber).getPropertyValue("width"))) /
    2;
  var height =
    (100 -
      parseInt(
        window.getComputedStyle(timeNumber).getPropertyValue("height")
      )) /
    2;
  timeNumber.style.padding = "".concat(height, "px ").concat(width, "px");
  console.log(width);
  console.log(height);
}
function startTimer() {
  var rington = new Audio(
    "audio/Vladimir_Zelenskij_Vstavaj_cherez_ne_mozhu.mp3"
  );
  var count = time.innerHTML;
  var sinceThatMoment = moment().add(count * 60 + 1, "seconds");
  var difference;
  timeLeft.style.display = "block";
  tellMeTime.style.visibility = "hidden";
  button.style.visibility = "hidden";
  minus.style.visibility = "hidden";
  plus.style.visibility = "hidden";
  console.log(sinceThatMoment);
  var countDifference = setInterval(function () {
    checkSizeOfTimeNumber();
    difference = moment().diff(sinceThatMoment, "seconds") * -1;
    count--;
    time.innerHTML = showTime(difference);
    if (difference <= 0 || difference === -1) {
      setTimeout(function () {
        button.style.visibility = "visible";
        minus.style.visibility = "visible";
        plus.style.visibility = "visible";
        checkSizeOfTimeNumber();
        time.innerHTML = "0";
        checkSizeOfTimeNumber();
      }, 8000);
      time.innerHTML = "00:00";
      rington.play();
      checkSizeOfTimeNumber();
      clearInterval(countDifference);
    }
    checkSizeOfTimeNumber();
  }, 1000);
}
