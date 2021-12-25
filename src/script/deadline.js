const myTimer = document.querySelector('#my-timer');
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

let futureDate = new Date(2022, 0, 17, 17, 34, 10);
const deadlineYear = futureDate.getFullYear();
const deadlineMonth = futureDate.getMonth();
const deadlineDay = futureDate.getDate();
const deadlineWeekday = futureDate.getDay();
const deadlineHours = futureDate.getHours();
const deadlineMinutes = futureDate.getMinutes();
const deadlineSeconds = futureDate.getSeconds();
myDeadlineHeadline.textContent = `The salary will be in my wallet at most on ${
  weekdaysArr[futureDate.getDay()]
}, ${deadlineDay} ${
  monthsArr[deadlineMonth]
} ${deadlineYear} at ${deadlineHours}:${deadlineMinutes}:${deadlineSeconds}`;

// console.log(deadlineWeekday);
