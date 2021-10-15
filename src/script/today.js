const today = document.querySelector('#today');
const spanToday = document.createElement('p');
const currentDate = new Date();
today.append(spanToday);

spanToday.textContent = currentDate.toLocaleDateString('en-GB');
spanToday.classList = 'text-3xl text-center';
