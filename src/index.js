import _ from 'lodash';
import './style.css';
import imgMaya from './maya.jpg';
import data from './data.xml';
import note from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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
