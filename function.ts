// Two types of function
//1. Normal function   2. Arrow function

//1. Normal function

function normalFunction(num1: number, num2: number): number {
  return num1 + num2;
}

const result = normalFunction(12, 15);
// console.log(result);

// 2. Arrow function

const addNumber = (number1: number, number2: number): number =>
  number1 + number2;

// console.log(addNumber(12, 12));

//Object => Function => Method
const poorUser = {
  name: "maruf",
  balance: 100,
  addBalance(value: number): number {
    const addValue = this.balance + value;
    return addValue;
  },
};
console.log(poorUser.addBalance(100));

// Looping
const arr: number[] = [2, 3, 5, 6];

const sqrArray = arr.map((val: number): number => val * val);
console.log(sqrArray);
