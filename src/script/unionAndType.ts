type ID = number;
type User = {
  id: ID,
  name: string,
  surname: string;
}

type Admin = {
  id: ID,
  username: string,
  alias: string
}

// the sign | is called union

const nick: User | Admin = { username: 'Nick', alias: 'Poop', id: 573 }
const ben: User | Admin = { name: 'Ben', surname: 'Wolles', id: 390 }

const myLogOutFive = document.querySelector('#log_five') as HTMLObjectElement;
myLogOutFive.innerText = `Nick's alias - ${nick.alias = 'Wooes'}, Ben's surname - ${ben.surname}.`;
