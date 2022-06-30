import mainPage from './mainPage';

export default class extends mainPage {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  getHtml() {
    return `
        <h1>Settings Page</h1>
        <p>
          Manage your configuration.
        </p>
      `;
  }
}
