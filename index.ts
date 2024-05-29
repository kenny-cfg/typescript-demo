function add(a: number, b: number) {
  return a + b
}

const addLambda = (a: number, b: number) => a + b

const sum = add(3, 4);
const sumLambda = addLambda(3, 4)

const multiply = (a: number, b?: number) => a * (b ?? 2);

console.log(multiply(3))