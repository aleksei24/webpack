function getFullName(name: string, surname: string): string {
  return name + ' ' + surname;
}

function rootNum(num: number) {
  return Math.sqrt(num);
}

const resOne = getFullName('Joe', 'Pete');
const resTwo = rootNum(23)


console.log(resOne);
console.log(resTwo);
