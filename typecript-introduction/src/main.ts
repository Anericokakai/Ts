let username = "Anerico";
console.log(username);

// ########################################################
// ! LESSON ONE
//  TODO Basic Types in Typescript

let a: number = 20;
let b: number = 6;

let isLoading: boolean;
let age: number;
age = 50;
isLoading = true;

console.log(a / b);

console.log(b * a);

//  THE ANY  TYPE
let music: any;
music = 1;
music = "hello juice world";

//  functions in typescript
const sum = (a: number, b: number) => a + b;
console.log(sum(1, 5));

//  concatenation
const concat = (a: number, b: string) => a + b;
console.log(concat(40, "anerico"));

//  UNION TYPES
let userId: string | number;

userId = 1;
userId = "qe2332-93";

//  inferring by intellisense

let strongPassword: RegExp = /\w+/g;

//  ARRAYS IN TYPESCRIPTS

let names = ["anerico", "jhon", "mesh"];
let studentsId = ["123kei", 124];
let mixedData = [12, "oeiu", true];

//  error when we add an int on string array
// names[0]=43; -> complain because typecript infer only to string and numbr
studentsId[0] = 12;
mixedData[0] = true;

// names=studentsId => wont run because the names only accepts strings
//  initializing arrays
let arr1 = [];
let users: string[] = [];

//  tuples and array
//  A tuple is an array that requires specific number of items and datatypes

let tuple1: [string, number] = ["anerico", 1];
//  tuple1=arr1  => wont run as tuples only accepts specific elements not an array of elements

//  OBJECTS IN TYPESCRIPT
let myObject: object;

myObject = {};

let customObject = {
  name: "Anerico",
  active: true,
};

//  typescript inferences and you cannot set the first prop of the object
//  to anything else other than Sting

// customObject.active="true" -> wont run as it expects string

//  Second option

type userTypes = {
  name?: string;
  email: string;
  password: string;
  active: boolean;
  roles: (string | number)[];
};
let user: userTypes = {
  name: "Anerico",
  email: "anerico@gmail.com",
  password: "12345",
  active: false,
  roles: ["admin"],
};
let user2: userTypes = {
  name: "leon",
  email: "leon@gmail.com",
  password: "qw34",
  active: true,
  roles: [123],
};
user = user2;


//  how to use it inside a function
const callUserByName = (user: userTypes) => {
  console.log(`my name is ${user.name?.toUpperCase()}`);
};

callUserByName(user);
