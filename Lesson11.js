// // Task 1
// var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for (var i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals[i];
// }

// console.log(animals.join());

// // Task 2
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var count = 0;
// var randomString = "";
// while (count < 6) {
//     var temp = alphabet[Math.floor(Math.random() * alphabet.length)]; 
//     console.log(temp);
//     randomString += temp;
//     count++;
// }
// console.log(randomString);

// Task 3
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    var temp = input[i];

    if (temp === "a") {
        // console.log("4");
        temp = 4;
    } else if (temp === "e") {
        temp = 3;
    } else if (temp === "i") {
        temp = 1;
    } else if (temp === "o") {
        temp = 0;
    }
    console.log(temp);
    output += temp;
}   

// Task 4
var inputWhile = "javascript is awesome";
var count = 0;
var output = "";

while (count < inputWhile.length) {
    var temp = inputWhile[count];
    if (temp === "a") {
        // console.log("4");
        temp = 4;
    } else if (temp === "e") {
        temp = 3;
    } else if (temp === "i") {
        temp = 1;
    } else if (temp === "o") {
        temp = 0;
    }
    console.log(temp);
    output += temp;
    count++;
}
