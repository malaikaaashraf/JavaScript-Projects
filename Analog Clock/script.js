let hour=document.querySelector('#hour');
// console.log(hour)
let min=document.querySelector('#min');
let sec=document.querySelector('#sec');

function displayTime(){
  let date=new Date;
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();
  let hourRotation=30*hh+mm/2;
  let minRotation=6*mm;
  let secRotation=6*ss;

  hour.style.transform=`rotate(${hourRotation}deg)`;
  min.style.transform=`rotate(${minRotation}deg)`;
  sec.style.transform=`rotate(${secRotation}deg)`;

}
setInterval(displayTime,1000)