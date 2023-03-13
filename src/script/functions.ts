function getFullName(name: string, surname: string): string {
  return name + ' ' + surname;
}

const res = getFullName('Joe', 'Pete');
console.log(res);
