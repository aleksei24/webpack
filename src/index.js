import logVariables from './logVariables';

console.log('ran from index.js');
logVariables();

// =============================================
// webpack styles workthrough
import './style.scss';

const headlineContent = 'Welcome';
const headline = document.querySelector('#main-headline');
headline.innerText = headlineContent;
