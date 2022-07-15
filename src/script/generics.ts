function addId<T>(obj: T) {
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

console.log('Generics result: ', resultGenerics);
