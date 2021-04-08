import Post from './post';
import json from './assets/myJson';
import './styles/styles.css';

const post = new Post('Webpack Post Title');

console.log('Post to String', post.toString());

console.log('JSON', json);
