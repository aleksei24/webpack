import _ from 'lodash';
import './style.css';
import imgMaya from './maya.jpg';
import data from './data.xml';
import note from './data.csv';

const mainWrapper = document.querySelector('.wrapper');

function testFunction() {
    const firstTitle = document.createElement('div');

    firstTitle.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');
    firstTitle.classList.add('pink');

    const myFirstImg = new Image();
    myFirstImg.src = imgMaya;

    firstTitle.appendChild(myFirstImg);

    console.log(data);
    console.log(note);

    return firstTitle;
}

mainWrapper.appendChild(testFunction());
