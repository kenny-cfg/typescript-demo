function add(a: number, b: number) {
  return a + b
}

const addLambda = (a: number, b: number) => a + b

const sum = add(3, 4);
const sumLambda = addLambda(3, 4)

const multiply = (a: number, b?: number) => a * (b ?? 2)
const multiplyWithDefault = (a: number, b: number = 2) => a * b

console.log(multiply(3))
console.log(multiplyWithDefault(3))