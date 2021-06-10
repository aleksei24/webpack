import _ from 'lodash';

const mainWrapper = document.querySelector('.wrapper');

function testFunction() {
    const firstTitle = document.createElement('div');

    firstTitle.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');

    return firstTitle;
}

mainWrapper.appendChild(testFunction());
