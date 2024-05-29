type NumberOrArrayOfStrings = number | string[];

let reusableVariable: NumberOrArrayOfStrings = 30;

reusableVariable = ['hello'];

type NumberAndStringTupleType = [number, string]

let tupleVariable: NumberAndStringTupleType;

tupleVariable = [1, 'goodbye'];

type Triple = [number, string, string[]];

let tripleVariable: Triple;

tripleVariable = [1, 'whoop', ['first', 'second', 'third']]

enum TShirtSize {
  Small,
  Medium,
  Large
}

type TShirtSizeAlternative = 'Small' | 'Medium' | 'Large';

let enumType: TShirtSize;

enumType = TShirtSize.Small

let altEnumType: TShirtSizeAlternative;

altEnumType = 'Small';