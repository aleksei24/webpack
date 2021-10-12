import './appearance';
import { questions } from './data/question';
import { Quiz } from './models/Quiz';

function main() {
    const quiz = new Quiz(questions);
}

main();
