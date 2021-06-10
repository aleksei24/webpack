import _ from 'lodash';
import './style.css';
import imgMaya from './maya.jpg';

const mainWrapper = document.querySelector('.wrapper');

function testFunction() {
    const firstTitle = document.createElement('div');

    firstTitle.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');
    firstTitle.classList.add('pink');

    const myFirstImg = new Image();
    myFirstImg.src = imgMaya;

    firstTitle.appendChild(myFirstImg);

    return firstTitle;
}

mainWrapper.appendChild(testFunction());
