type Passenger = {
    name: string,
    age: number,
    commuteDaily?: boolean
}

function createPassenger(psg: Passenger) {
    return `Name: ${psg.name}, Age: ${psg.age}, Commute today: ${psg.commuteDaily}. `
}

const pName: string = 'Sue'
const pAge: number = 29
const pCommute: boolean = true

const passOne = createPassenger({ name: pName, age: pAge, commuteDaily: pCommute })
const passTwo = createPassenger({ name: 'Ozzy', age: 56, commuteDaily: false })

const myLogOutThree = document.querySelector('#log_three') as HTMLObjectElement;
myLogOutThree.innerText = `${passOne} ${passTwo}`;