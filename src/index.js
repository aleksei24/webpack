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
// import './styles/mixins.scss';
import './styles/fonts.scss';
import './styles/default.scss';
import './styles/view.scss';

// =============================================
// script
import './script/vibes';
import './script/displayText';
import './script/getData';
import './script/myTimer';
import './script/dictionary';
// import { obTwo, valsOfObj } from './testObjects';
// import './testObjects';
