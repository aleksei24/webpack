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
        d: "Don't ask me",
        correct: 'b',
    },
];

// =============================================
const quiz = document.querySelector('#quiz');
quiz.classList = 'bg-green-100 border-2 border-solid border-black rounded-md p-3 w-screen sm:w-4/6';

const quizQuestion = quiz.querySelector('#quiz-question');
quizQuestion.classList = 'font-bold text-xl';

const answerList = quiz.querySelector('#answer-list');
answerList.classList = 'my-3';
const answerListItems = answerList.children;
[...answerListItems].forEach((el) => {
    el.classList = 'my-1';
});

const quizBtn = quiz.querySelector('#quizBtn');
quizBtn.classList = 'bg-yellow-600 p-2 w-full rounded text-lg text-gray-200 uppercase';

const a = answerList.querySelector('#a');
const b = answerList.querySelector('#b');
const c = answerList.querySelector('#c');
const d = answerList.querySelector('#d');

[a, b, c, d].forEach((el) => (el.classList = 'mr-2'));

// ======================================================
const aText = answerList.querySelector('#a-text');
const bText = answerList.querySelector('#b-text');
const cText = answerList.querySelector('#c-text');
const dText = answerList.querySelector('#d-text');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deSelectAnswer();
    const currentQuizData = quizData[currentQuiz];
    quizQuestion.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
}

const answers = answerList.querySelectorAll('input');

function getSelected() {
    let tempAns;
    answers.forEach((el) => {
        if (el.checked) {
            tempAns = el.id;
        }
    });
    return tempAns;
}

function deSelectAnswer() {
    answers.forEach((el) => {
        el.checked = false;
    });
}

loadQuiz();

quizBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <div class='flex flex-col items-center'>
              <h2>
                Your result is
              </h2>
              <h3>${score} out of ${quizData.length}.</h3>
              <a href='/' class='rounded-md px-2 py-1 bg-yellow-500 text-gray-100 mt-8'>Reload</a>
            </div>
            `;
        }
    }
});
