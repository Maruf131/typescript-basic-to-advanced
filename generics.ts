//dynamically generalize: Generic

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"]; // Compare 
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"]; // Generics String

//const rollNumbers: number[] = [4, 7, 11];  // Compare 
const rollNumbers: GenericArray<number> = [4, 7, 11]; // Generics Number

//const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true]; // Generics Boolean



type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];


type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];