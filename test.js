var test;
var proba = "Hello!";
var empty = null;
empty = undefined;

const stable = 77;
// stable = 'bred';
// const emptyConst;


var longString = "My long string is long".toUpperCase();
// var newLine = longString.toUpperCase();
// newLine = longString.toLowerCase();
console.log(longString.slice(3, 14));

console.log(test);
console.log(proba);
console.log(empty);
console.log(stable);

var arr1 = []; // пустий масив
var arr2 = [5, "test", true]; // ініциалізований масив

console.log(arr2[1]);

var arr3 = [5, 6, ["test", 123]];
console.log(arr3[2][1]);
console.log(arr3.length);

var arr4 = [];
arr4.push("test");
console.log(arr4.pop());

var arr5 = [5, 6, ["test", 123]];
arr5.push("new");
console.log(arr5.toString());
arr5.unshift("newNew");
console.log(arr5.toString());

console.log(arr5.pop());
console.log(arr5.shift());

var colors = ["red", "green", "blue"];
console.log(colors.join()); 

