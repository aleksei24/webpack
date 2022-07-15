function addId<T>(obj: <T>) {
  const id = Math.random().toString(16);
  return {
    ...obj, id
  }
}

const jack = {
  name: 'Jack'
}

const resultGenerics = addId(jack);

console.log('Generics result: ', resultGenerics);
