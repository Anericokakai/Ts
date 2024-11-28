"use strict";
let username = "Anerico";
console.log(username);
// ########################################################
// ! LESSON ONE
//  TODO Basic Types in Typescript
let a = 20;
let b = 6;
let isLoading;
let age;
age = 50;
isLoading = true;
console.log(a / b);
console.log(b * a);
//  THE ANY  TYPE
let music;
music = 1;
music = "hello juice world";
//  functions in typescript
const sum = (a, b) => a + b;
console.log(sum(1, 5));
//  concatenation
const concat = (a, b) => a + b;
console.log(concat(40, "anerico"));
//  UNION TYPES
let userId;
userId = 1;
userId = "qe2332-93";
//  inferring by intellisense
let strongPassword = /\w+/g;
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
let users = [];
//  tuples and array
//  A tuple is an array that requires specific number of items and datatypes
let tuple1 = ["anerico", 1];
//  tuple1=arr1  => wont run as tuples only accepts specific elements not an array of elements
//  OBJECTS IN TYPESCRIPT
let myObject;
myObject = {};
let customObject = {
    name: "Anerico",
    active: true,
};
let user = {
    name: "Anerico",
    email: "anerico@gmail.com",
    password: "12345",
    active: false,
    roles: ["admin"],
};
let user2 = {
    name: "leon",
    email: "leon@gmail.com",
    password: "qw34",
    active: true,
    roles: [123],
};
user = user2;
//  how to use it inside a function
const callUserByName = (user) => {
    var _a;
    console.log(`my name is ${(_a = user.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`);
};
callUserByName(user);
