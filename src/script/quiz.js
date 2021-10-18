const quizData = [
    {
        question: 'The nearest star to the Earth?',
        a: 'Vega',
        b: 'Cassiope',
        c: 'Sun',
        d: 'Andromeda',
        correct: 'c',
    },
    {
        question: 'Who was the president of USSR?',
        a: 'Brezhnev',
        b: 'Gorbachev',
        c: 'Eltsin',
        d: 'Stalin',
        correct: 'b',
    },
    {
        question: 'The capital of the United Kingdom?',
        a: 'London',
        b: 'New York',
        c: 'Glasgow',
        d: 'Oslo',
        correct: 'a',
    },
    {
        question: 'The current Prime Minister of the UK?',
        a: 'Elizabeth II',
        b: 'David Cameron',
        c: 'Margaret Thatcher',
        d: 'Boris Johnson',
        correct: 'd',
    },
    {
        question: 'Is UK in the EU?',
        a: 'Yes',
        b: 'No',
        c: "Don't know",
        correct: 'b',
    },
];

const quiz = document.querySelector('#quiz');
quiz.classList = 'border-2 border-solid border-black rounded-md p-3 w-screen sm:w-4/6';
