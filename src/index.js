import _ from 'lodash';
import printMe from './print.js';

function component() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('wrapper');
    const myBtn = document.createElement('button');

    myDiv.innerHTML = _.join(['Hello', 'webpack'], ' ');

    myBtn.innerHTML = 'Poke me and go to the console';
    myBtn.addEventListener('click', printMe);

    myDiv.appendChild(myBtn);

    return myDiv;
}

let myElem = component();
document.body.appendChild(myElem);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the printMe module');
        document.body.removeChild(myElem);
        myElem = component();
        document.body.appendChild(myElem);
    });
}
