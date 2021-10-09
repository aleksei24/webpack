import mainPage from './mainPage';

export default class extends mainPage {
    constructor() {
        super();
        this.setTitle('Posts');
    }

    getHtml() {
        return `
          <h1>Posts Page</h1>
          <ul>
            <li>First Post</li>
            <li>Second Post</li>
          </ul>
        `;
    }
}
