console.log('using typeof');

function employee(x: string | number) {
  if (typeof x === 'string') {
    console.log('Name');
  }

  if (typeof x === 'number') {
    console.log('ID');
  }
}

employee('John Doe');
employee(456);

console.log('stop using typeof');
