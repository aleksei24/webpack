const myTimer = document.querySelector('#my-timer');
const myTimerHeadline = document.querySelector('#my-timer-headline');
const myTimerContainer = document.querySelector('#my-timer-container');
const myTimerElems = myTimerContainer.children;

const myDays = document.querySelector('#my-days');
const myHours = document.querySelector('#my-hours');
const myMinutes = document.querySelector('#my-minutes');
const mySeconds = document.querySelector('#my-seconds');

// =================================
myTimerHeadline.classList = 'text-center text-2xl font-semibold mb-8';

myTimerContainer.classList = 'flex items-center justify-center';

[...myTimerElems].map(
  (el) => (el.classList = 'border-black border-solid border-2 p-1 text-center mx-1')
);

[myDays, myHours, myMinutes, mySeconds].forEach((el) => {
  el.classList = 'text-xl font-semibold';
});

// ===========================================
// logic
const myDate = '9 Feb 2022 09:09:20';

myTimerHeadline.textContent = `I will be free at most on ${myDate}`;

function countdown() {
  const newYearDate = new Date(myDate);
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

  if (totalSec < 0) {
    clearInterval(timeLeft);
    [myDays, myHours, myMinutes, mySeconds].forEach((el) => {
      el.innerHTML = '0';
    });
    myTimerHeadline.textContent = `Time's up. Countdown ended on ${myDate}`;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

let timeLeft = setInterval(countdown, 1000);

// myTimer.classList = 'hidden';
