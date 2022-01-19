const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');


function newYear(){
  const countDate = new Date('November 30, 2021 00:00:00').getTime();
  const now = new Date().getTime();
  gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day= hour * 24;

  const d = Math.floor(gap / (day));
  const h = Math.floor((gap % (day)) / (hour));
  const m = Math.floor((gap % (hour)) / (minute));
  const s = Math.floor((gap % (minute)) / (second));

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}

setInterval(newYear, 1000);