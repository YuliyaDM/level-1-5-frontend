import * as moment from "moment";

const button: any = document.querySelector(".button");
const minus: any = document.querySelector(".button-minus");
const plus: any = document.querySelector(".button-plus");
const time: any = document.querySelector(".time-number");
const timeLeft: any = document.querySelector(".d1");
const tellMeTime: any = document.querySelector(".d0");

console.log(moment());
console.log(button);
console.log(button?.style);

function showTime(seconds: number) {
  let minutes: number = Math.floor(seconds / 60);
  let second: number = seconds - minutes * 60;

  if (minutes === 0) {
    if (second === 0) {
      return `00:00`;
    } else {
      if (second < 10) {
        return `00:0${second}`;
      } else {
        return `00:${second}`;
      }
    }
  } else {
    if (minutes < 10 && second < 10) {
      return `0${minutes}:0${second}`;
    }
    if (minutes < 10 && second > 10) {
      return `0${minutes}:${second}`;
    }
    if (minutes > 10 && second < 10) {
      return `${minutes}:0${second}`;
    }
    if (minutes > 10 && second > 10) {
      return `${minutes}:${second}`;
    }
  }
}

button.addEventListener("click", function () {
  startTimer();
});

function checkSizeOfTimeNumber() {
  let timeNumber = time;
  let width =
    (100 -
      parseInt(window.getComputedStyle(timeNumber).getPropertyValue("width"))) /
    2;
  let height =
    (100 -
      parseInt(
        window.getComputedStyle(timeNumber).getPropertyValue("height")
      )) /
    2;
  timeNumber.style.padding = `${height}px ${width}px`;
  console.log(width);
  console.log(height);
}

function startTimer() {
  let rington = new Audio(
    "audio/Vladimir_Zelenskij_Vstavaj_cherez_ne_mozhu.mp3"
  );
  let count = time.innerHTML;
  let sinceThatMoment = moment().add(count * 60 + 1, "seconds");
  let difference;
  timeLeft.style.display = "block";
  tellMeTime.style.visibility = "hidden";
  button.style.visibility = "hidden";
  minus.style.visibility = "hidden";
  plus.style.visibility = "hidden";
  console.log(sinceThatMoment);
  let countDifference = setInterval(() => {
    checkSizeOfTimeNumber();
    difference = moment().diff(sinceThatMoment, "seconds") * -1;
    count--;
    time.innerHTML = showTime(difference);
    if (difference <= 0 || difference === -1) {
      setTimeout(() => {
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
