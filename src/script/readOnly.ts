type Shoes = {
  readonly _id: string,
  name: string,
  price: number,
  isAvailable: boolean
}

let boots: Shoes = {
  _id: '45ng67', // this property is immutable
  name: 'wellies',
  price: 45.99,
  isAvailable: true
}

// const myLogOutFour = document.querySelector('#log_four') as HTMLObjectElement;
// myLogOutFour.innerText = `${boots.isAvailable = false}`;