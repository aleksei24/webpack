import _ from 'lodash';
import printMe from './print.js';
function component() {
    const myDiv = document.createElement('div');
    myDiv.classList = 'wrapper';
    myDiv.style.margin = '0 auto';
    myDiv.style.padding = '10px';
    const myBtn = document.createElement('button');
    myDiv.innerHTML = _.join(['Hello', 'webpack'], ' ');

    myBtn.innerHTML = 'Poke me and go to the console';

    myBtn.addEventListener('click', printMe);

    myDiv.appendChild(myBtn);

    return myDiv;
}

document.body.appendChild(component());
