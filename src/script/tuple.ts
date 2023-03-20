// tuple destructuring
// be careful to use it

let userData: [number, string, boolean]
//userData = [false, 45, 'Syd'] // not good
// it should be as in the same order as it declared
userData = [45, 'Syd', false]

type UserTwo = [id: number, nick: string]
const receiver: UserTwo = [54, 'Bob']
//const receiver2: UserTwo = ['54', 'Bob'] // not good

const myLogOutSeven = document.querySelector('#log_seven') as HTMLObjectElement;
myLogOutSeven.innerText = `Destructuring tuple: ${userData}.`;
