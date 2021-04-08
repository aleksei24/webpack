import Post from './post';
import json from './assets/myJson';
import img from './assets/maya.jpg';
import './styles/styles.css';

const post = new Post('Webpack Post Title', img);

console.log('Post to String', post.toString());

console.log('JSON', json);
