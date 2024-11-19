let startTime, updatedTime, difference, tInterval;
let running = false;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(getShowTime, 1000);
    running = true;
  }
}

function pauseTimer() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function resetTimer() {
  clearInterval(tInterval);
  document.getElementById("display").innerHTML = "00:00:00";
  difference = 0;
  running = false;
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "display"
  ).innerHTML = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
