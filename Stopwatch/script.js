let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.querySelector("#stopBtn");
let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");
let msec = 0;
let sec = 0;
let min = 0;
let timerId = null;
startBtn.addEventListener("click", function () {
  timerId = setInterval(startTimer, 50);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});
resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00: 00: 00`;
  msec = sec = min = 0;
});
function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
  }
  let msecStr = msec < 10 ? `0${msec}` : msec;
  let secStr = sec < 10 ? `0${sec}` : sec;
  let minStr = min < 10 ? `0${min}` : min;
  timerDisplay.innerHTML = `${minStr}: ${secStr}: ${msecStr}`;
}
