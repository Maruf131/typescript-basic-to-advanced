// Array, Object

let friends = ["maruf", "tony", "rahim", "karim"];
// let friends: string[] = ["maruf", "tony", "rahim", "karim"];
friends.push("rahman");
console.log(friends);

const fridayBazar: (string | number)[] = ["Rice", 3, "eggs", 12, "milk", 5];
console.log(fridayBazar);

// -------Array tuple----------
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

//---------------Object ----------------
// const car: {
//   type: "Toyota"; // literal types
//   model?: string; // Optional type
//   year: number;
// } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };

const car: {
  readonly type: string; //Access modifier
  model?: string; // Optional type
  year: number;
} = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
