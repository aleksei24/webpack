// Objects in typescript are shown through functions

function createCustomer(customer: { name: string, age: number, visitDaily?: boolean }) {
  return `${customer.name} ${customer.age} ${customer.visitDaily}`
}

const customer_one = createCustomer({ name: 'Bill', age: 45, visitDaily: false })

const myLogOutTwo = document.querySelector('#log_two') as HTMLObjectElement;
myLogOutTwo.innerText = `${customer_one}`;