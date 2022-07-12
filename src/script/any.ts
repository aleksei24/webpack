// any / void / never / unknown

// void
function doTask1(): void {
  console.log('task one is done');
}

let f: void = undefined;

// any
let a2: any = 'str';
// impossible to name a variable as 'a', because it's been declared in file exOne.ts
// try to avoid using any

// never
function doTask2(): never {
  throw new Error("never");  
}

// unknown
let varAny: any = 87;
let varUnknown: unknown = 87;

let newVar1: string = varAny;
// let newVar2: string = varUnknown; // does not work
let newVar3: string = varUnknown as string; // the solution

let page: string = '00';
let numericPage: number = (page as unknown) as number;
console.log(numericPage);
console.log(typeof numericPage);
