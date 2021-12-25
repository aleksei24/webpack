import logVariables from './script/logVariables';

console.log('ran from index.js');
logVariables();

// ==========================================
// img
import imgOne from './img/calmness.webp';
const putPic = document.querySelector('#putPic');
const myImg1 = new Image();
myImg1.src = imgOne;
putPic.append(myImg1);

// =============================================
// webpack styles workthrough
// import './default.scss';
// import './styles/fonts.scss';
// import './test.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

// =============================================
// script
import './script/vibes';
import './script/displayText';
import './script/getData';
import './script/today';
import './script/formTest';
import './script/myTimer';
import './script/deadline';
// import { obTwo, valsOfObj } from './testObjects';
// import './testObjects';
