import Post from '@models/post';
import json from './assets/myJson';
import pic from './assets/maya.jpg';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', pic);

console.log('Post to String', post.toString());

const pre = document.querySelector('pre');
pre.classList.add('orange');
pre.innerHTML = post.toString();

// console.log('JSON', json);
