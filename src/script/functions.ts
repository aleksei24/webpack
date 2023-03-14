function getFullName(name: string, surname: string): string {
  return name + ' ' + surname;
}

function rootNum(num: number) {
  return Math.sqrt(num);
}

const resOne = getFullName('Joe', 'Pete');
const resTwo = rootNum(23)

function log(a?: string, b?: number) {
  if (b) {
    console.log(b)
  }
  console.log(a);
}

log(resOne, resTwo)

const myLogOut = document.querySelector('#log') as HTMLObjectElement;
myLogOut.innerText = `Log_1: ${resOne}, Log_2: ${resTwo}`;