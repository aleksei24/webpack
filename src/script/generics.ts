const price: Array<number> = [34, 6.89, 10.49]
const products: Array<string> = ['bread', 'milk', 'millet']

function showArr<T>(value: T): T {
  return value
}

// the way to create my own Type
interface Shooping {
  c: number,
  n: string
}

function showArrTwo<Shooping>(v: Shooping): Shooping {
  return v
}

const myLogOutThirteen = document.querySelector('#log_thirteen') as HTMLObjectElement
myLogOutThirteen.innerText = `Price array: ${showArrTwo(price)}`