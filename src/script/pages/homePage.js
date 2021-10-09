import mainPage from './mainPage';

export default class extends mainPage {
    constructor() {
        super();
        this.setTitle('Home');
    }

    getHtml() {
        return `
          <h1>Home Page</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi
            autem, sit odit perferendis accusamus perspiciatis enim reiciendis qui?   Animi
            dolore consequatur enim saepe quibusdam mollitia, consectetur provident   tenetur
            in ipsam reiciendis obcaecati at?
          </p>
          <p>
            <a href="/posts" data-link>Resent Posts</a>
          </p>
        `;
    }
}
