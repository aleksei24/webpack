import logVariables from './logVariables';

console.log('ran from index.js');
logVariables();

// =============================================
// webpack styles workthrough
import './style.scss';
import './test.css';

import { randomPhrase } from './vibes';

const headlineContent = randomPhrase;
const headline = document.querySelector('#main-headline');
headline.innerText = headlineContent;
console.log(headlineContent);

import { obTwo } from './testObjects';

console.log(obTwo);
