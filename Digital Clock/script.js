let time = document.querySelector("#time");
let timeFormat = document.querySelector("#timeFormat");
setInterval(digitalClock, 1000);
function digitalClock() {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  if (hour < 12) timeFormat.innerHTML = `AM`;
  else {
    timeFormat.innerHTML = `PM`;
  }
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;
  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;
  // if (hour < 12) timeFormat.innerHTML = `PM`;
  // else {
  //   timeFormat.innerHTML = `AM`;
  // }
  time.innerHTML = `${hour}:${min}:${sec}`;
}
