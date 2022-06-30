function checkSizeOfTimeNumber() {
  let timeNumber = document.querySelector(".time-number");
  let width =
    (70 -
      parseInt(window.getComputedStyle(timeNumber).getPropertyValue("width"))) /
    2;
  let height =
    (70 -
      parseInt(
        window.getComputedStyle(timeNumber).getPropertyValue("height")
      )) /
    2;
  timeNumber.style.padding = `${height}px ${width}px`;
  console.log("Greetings, world!");
}

checkSizeOfTimeNumber();

function minus() {
  let result = document.body.querySelector(".time-number").innerHTML;
  if (result == 0) {
    alert("Don't you dare.");
  } else {
    checkSizeOfTimeNumber();
    document.body.querySelector(".time-number").innerHTML = `${+result - 1}`;
    checkSizeOfTimeNumber();
  }
}

function plus() {
  checkSizeOfTimeNumber();
  let result = document.body.querySelector(".time-number").innerHTML;
  document.body.querySelector(".time-number").innerHTML = `${+result + 1}`;
  checkSizeOfTimeNumber();
}
