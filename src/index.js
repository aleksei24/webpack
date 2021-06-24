import _ from 'lodash';

const mainWrapper = document.querySelector('.wrapper');

function testFunction() {
    const innerDiv = document.createElement('div');
    const myBtn = document.createElement('button');

    innerDiv.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');
    myBtn.innerHTML = 'Poke me and go to the console';

    innerDiv.appendChild(myBtn);

    return innerDiv;
}

// mainWrapper.appendChild(testFunction());
document.body.appendChild(testFunction());
