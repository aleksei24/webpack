function addId<T extends object>(obj: T) {
  const id = Math.random().toString(16);
  return {
    ...obj, id
  }
}

interface UserGenericsInterface {
  name: string,
}

const jack: UserGenericsInterface = {
  name: 'Jack'
}

const resultGenerics = addId<UserGenericsInterface>(jack);

const myLogOutThirteen = document.querySelector('#log_thirteen') as HTMLObjectElement
myLogOutThirteen.innerText = `Waiting a second`