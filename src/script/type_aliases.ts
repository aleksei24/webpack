type Passenger = {
    name: string,
    age: number,
    commuteDaily?: boolean
}

function createPassenger(psg: Passenger) {
    return `Name: ${psg.name}, Age: ${psg.age}, Commute today: ${psg.commuteDaily}.`
}

const passOne = createPassenger({ name: 'Sue', age: 29, commuteDaily: true })

const myLogOutThree = document.querySelector('#log_three') as HTMLObjectElement;
myLogOutThree.innerText = `${passOne}`;