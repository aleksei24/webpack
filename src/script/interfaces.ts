interface UserInterface {
  name: string,
  age?: number,
  sendMessage(): string,
};

// a question mark in property makes chaining

const user1: UserInterface = {
  name: 'Joe',
  age: 34,
  sendMessage() {
    return 'Hi, everyone'
  },
};

const user2: UserInterface = {
  name:'Bill',
  sendMessage() {
    return 'Hello' + ' ' + this.name;
  },
};

const greetingFromUser2 = user2.sendMessage();

console.log(greetingFromUser2);

