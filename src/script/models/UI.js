export class UI {
    constructor() {}

    /**
     *
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.querySelector('#question');
        questionTitle.innerText = text;
    }

    /**
     *
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices, callback) {
        const choicesContainer = document.querySelector('#choices');
        choicesContainer.innerHTML = '';

        for (let i = 0; i < choices.length; i++) {
            const btn = document.createElement('button');
            btn.innerText = choices[i];
            btn.classList =
                'bg-yellow-600 my-3 border-2 border-solid rounded-xl p-2 text-yellow-100 w-72 h-16 text-2xl';
            btn.addEventListener('click', () => callback(choices[i]));
            choicesContainer.append(btn);
        }
    }

    /**
     *
     * @param {number} score the total score
     */
    showScores(score) {
        const quizEndHtml = `
            <h1 class='text-4xl mb-8'>Result</h1>
            <h3 class='text-3xl'>Your Score is ${score}</h3>
        `;
        const elem = document.querySelector('#quiz');
        elem.innerHTML = quizEndHtml;
    }

    /**
     *
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total the total questions
     */
    showProgress(currentIndex, total) {
        const elem = document.querySelector('#progress');
        elem.innerHTML = `Question ${currentIndex} of ${total}`;
    }
}
