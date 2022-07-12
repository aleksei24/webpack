const headline = document.querySelector('#main-headline') as HTMLInputElement;
headline.innerText = 'Hello';
console.log(headline);

headline.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  console.log('event', target.className);
})
