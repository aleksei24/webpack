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

const arr_1: number[] = [1, 4, 7, 9]
const arr_2: string[] = ['1', 'm', 'h', '9']
const arr_3: (string | number)[] = [1, 's', 7, 'r']

const myLogOutFive = document.querySelector('#log_five') as HTMLObjectElement;
myLogOutFive.innerText = `Nick's alias - ${nick.alias = 'Wooes'}, Ben's surname - ${ben.surname}.`;

const showMixedArr = document.querySelector('#log_six') as HTMLObjectElement;
showMixedArr.innerText = `Mixed Array: ${arr_3}.`;