
console.log('Hello, I\'m trying typescript');

const phrases:string[]=[
  'Your pain today will be your strength tomorrow',
  'One thing at a time',
  'We are what we repeatedly do',
  'Actions speak louder than words',
  'A journey of thousand miles begins with a single step',
  'An apple a day keeps the doctor away',
  'Better late than never',
  'Clothes do not make the man',
  'Cowards die many times before their deaths',
  'Don’t judge a book by its cover',
  'Every cloud has a silver lining',
]

const randomPhrase:string = phrases[Math.floor(Math.random() * Math.floor(phrases.length))]
