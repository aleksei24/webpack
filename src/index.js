import logVariables from './logVariables';

console.log('ran from index.js');
logVariables();

// =============================================
// webpack styles workthrough
import './style.scss';
import './test.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import { randomPhrase } from './vibes';

const headline = document.querySelector('#main-headline');
const headlineContent = randomPhrase;
headline.textContent = headlineContent;

const text = document.createElement('p');
const app = document.querySelector('#app');
app.append(text);
text.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, eaque ad voluptatem porro doloremque mollitia earum minima nisi in molestias laudantium nesciunt officia illum dignissimos provident aliquam? Illo quibusdam placeat ut unde hic amet. Unde, accusantium. Magni.';

console.log(headlineContent);

import { obTwo } from './testObjects';
import { valsOfObj } from './testObjects';

console.log(obTwo);
console.log(valsOfObj);
