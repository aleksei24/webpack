export class Question {
    /**
     *
     * @param {string} text the text of the question
     * @param {string[]} choices the choices of the question
     * @param {string} answer the answer of the question
     */
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     *
     * @param {string} choice some text to guess
     * @returns {boolean} return true if the answer is correct
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }
}
