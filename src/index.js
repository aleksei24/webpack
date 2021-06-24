import _ from 'lodash';
import Print from './print';

const mainWrapper = document.querySelector('.wrapper');

async function getComponent() {
    const innerDiv = document.createElement('div');

    innerDiv.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');
    innerDiv.addEventListener('click', Print.bind(null, 'Hello Webpack'));

    return innerDiv;
}

document.body.appendChild(innerDiv);
