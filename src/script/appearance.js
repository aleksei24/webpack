const quiz = document.querySelector('#quiz');
quiz.classList =
    'container mx-auto p-8 w-screen md:w-3/4 bg-green-100 border-2 border-black border-solid rounded-lg h-screen text-center';

const headline = document.querySelector('#headline');
headline.classList = 'text-5xl font-bold px-4 py-8';

const question = document.querySelector('#question');
question.classList = 'text-3xl text-green-900';

const choices = document.querySelector('#choices');
const choicesElem = choices.children;
choices.classList = 'flex flex-col items-center';

// [...choicesElem].forEach((el) => {
//     el.classList = 'bg-yellow-600 my-3 border-2 border-solid rounded-xl p-2 text-yellow-100';
// });

const progress = document.querySelector('#progress');
progress.classList = 'text-2xl';
