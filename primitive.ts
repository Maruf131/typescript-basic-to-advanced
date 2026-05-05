//Primitive Types
// String, Number, Boolean, undefined, null

//----------String---------
const course: String = "Web development level-2";

// ---------boolean--------
const isActive: boolean = true;
const hasPermission = false; // TypeScript infers 'boolean' type
// console.log(isActive, hasPermission);

//--------- Number---------
let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
let float: number = 3.14; // Floating point
console.log(decimal, hex, binary, octal, float);

//-------Null & Undefined--------
let y: undefined = undefined;
let z: null = null;
console.log(z, y);
