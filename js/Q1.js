"use strict";

var state = "on";
function toggleLight() {
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}

var id = "";
var timeLeft = "";
function reloading(){
  timeLeft = document.getElementById("input-time").value;
  if (timeLeft == ""){
    return alert("請輸入數值");
  }
  document.getElementById("input-time").value = "";
  id = setInterval(countDownTimer, 1000);
}

function countDownTimer() {
  if (timeLeft <= 0) {
    document.getElementById("image").src = "img/off.jpg";
    clearInterval(id);
  }
  document.getElementById("timer").innerHTML = timeLeft;
  timeLeft--;
}

