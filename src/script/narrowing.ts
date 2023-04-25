function checkType(mytype: string | number) {
  // should be if statement
  if (typeof mytype === 'number') {
    return mytype.toFixed(2)
  }
  return mytype.repeat(3)
}

const myLogOutFifteen = document.querySelector('#log_fifteen') as HTMLObjectElement
myLogOutFifteen.innerText = `Narrowing: ${checkType(5.4947)} ${checkType('|str|')}`
