const berries: Array<string> = []
berries.push('gooseberries')

const myLogOutFour = document.querySelector('#log_four') as HTMLObjectElement;
myLogOutFour.innerText = `${berries}`;