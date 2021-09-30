const today = document.querySelector('#today');
const spanToday = document.createElement('span');
const currentDate = new Date();
today.append(spanToday);

spanToday.textContent = currentDate.toLocaleDateString('en-GB');
spanToday.setAttribute('class', 'text-2xl');
