const price: Array<number> = [34, 6.89, 10.49]
const products: Array<string> = ['bread', 'milk', 'millet']

function showArr(value: number | string): number | string {
  return value
}

const myLogOutThirteen = document.querySelector('#log_thirteen') as HTMLObjectElement
myLogOutThirteen.innerText = `Waiting a second: ${showArr(price[1])}`