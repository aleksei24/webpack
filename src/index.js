import _ from 'lodash';
import printMe from './print.js';

const mainWrapper = document.querySelector('.wrapper');

function testFunction() {
    const innerDiv = document.createElement('div');
    const myBtn = document.createElement('button');

    innerDiv.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');
    myBtn.innerHTML = 'Poke me and go to the console';
    myBtn.addEventListener('click', printMe);

    innerDiv.appendChild(myBtn);

    return firstTitle;
}

mainWrapper.appendChild(testFunction());
