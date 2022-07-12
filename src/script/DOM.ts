const headline = document.querySelector('#main-headline') as HTMLInputElement;
headline.innerText = 'Hello';
console.log(headline);

headline.addEventListener('click', (e) => {
  console.log('event', e);
})
