const myTimer = document.querySelector('#deadline-block');
const myDeadlineHeadline = document.querySelector('.giveaway');
const myDeadline = document.querySelector('.deadline');
const myDeadlineElems = document.querySelectorAll('.deadline-format h4');

// =================================
myDeadlineHeadline.classList = 'text-center text-base font-normal mb-8';

myDeadline.classList = 'flex items-center justify-between';

const monthsArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();*/

let futureDate = new Date(2022, 0, 29, 8, 7, 3);
// const futureDate = new Date(tempYear, tempMonth, tempDay + 22, 17, 34);
const deadlineYear = futureDate.getFullYear();
const deadlineMonth = futureDate.getMonth();
const deadlineDay = futureDate.getDate();
const deadlineWeekday = futureDate.getDay();
const deadlineHours = futureDate.getHours();
const deadlineMinutes = futureDate.getMinutes();
const deadlineSeconds = futureDate.getSeconds();
myDeadlineHeadline.textContent = `Next salary will be in my wallet at most on ${
  weekdaysArr[futureDate.getDay()]
}, ${deadlineDay} ${
  monthsArr[deadlineMonth]
} ${deadlineYear} at ${deadlineHours}:${deadlineMinutes}`;

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const temp = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(temp / oneDay);
  let hours = Math.floor((temp % oneDay) / oneHour);
  let minutes = Math.floor((temp % oneHour) / oneMinute);
  let seconds = Math.floor((temp % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  myDeadlineElems.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (temp < 0) {
    clearInterval(countDown);
    myDeadline.innerHTML = `<h4>Time is up</h4>`;
  }
}

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();

// ===========================
// appearance
const deadlineFormat = document.querySelectorAll('.deadline-format');

// console.log(deadlineFormat);

myTimer.classList = 'hidden';
