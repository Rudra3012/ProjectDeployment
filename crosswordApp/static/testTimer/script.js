var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function startTimer() {
  console.log("Timer started");
  setInterval(setTime, 1000);
}

function setTime() {
  ++totalSeconds;
  document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
  document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}