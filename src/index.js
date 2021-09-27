import logVariables from './logVariables';

console.log('ran from index.js');
logVariables();

// =============================================
// webpack styles workthrough
// import './default.scss';
// import './fonts.scss';
// import './test.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import { randomPhrase, headline, headlineContent } from './vibes';
import { text, app } from './displayText';
import { obTwo, valsOfObj } from './testObjects';
