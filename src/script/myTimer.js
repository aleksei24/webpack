const myTimer = document.querySelector('#my-timer');
const myTimerHeadline = document.querySelector('#my-timer-headline');
const myTimerContainer = document.querySelector('#my-timer-container');
const myTimerElems = myTimerContainer.children;

const myDays = document.querySelector('#my-days');
const myHours = document.querySelector('#my-hours');
const myMinutes = document.querySelector('#my-minutes');
const mySeconds = document.querySelector('#my-seconds');

// =================================
myTimerHeadline.classList = 'text-center text-3xl font-bold mb-12';

myTimerContainer.classList = 'flex items-center justify-center';

[...myTimerElems].map(
  (el) => (el.classList = 'border-black border-solid border-2 p-1 text-center mx-1')
);

[myDays, myHours, myMinutes, mySeconds].forEach((el) => {
  el.classList = 'text-2xl font-bold';
});

// ===========================================
// logic
const newYear = '3 Jan 2022 11:37:04';

myTimerHeadline.textContent = `Time until ${newYear}`;

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSec = (newYearDate - currentDate) / 1000;
  const d = Math.floor(totalSec / 3600 / 24);
  const h = Math.floor(totalSec / 3600) % 24;
  const m = Math.floor(totalSec / 60) % 60;
  const s = Math.floor(totalSec) % 60;

  myDays.innerHTML = d;
  myHours.innerHTML = formatTime(h);
  myMinutes.innerHTML = formatTime(m);
  mySeconds.innerHTML = formatTime(s);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
