// Type alias 
type User = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user";
};
type UserWithRole = User & Role;


// interface : object type: array, object , function

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Mr.X",
  age: 100,
  role: "admin",
};

const user2: IUser = {
  name: "Mr. Y",
  age: 102,
};


type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

// function interface

type Add = (num1: number, num2: number) => number; // for compare interface

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;


// Array interface
type Friends = string[]; // for compare interface

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["A", "B", "C"];
