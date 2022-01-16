// Task 1
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

for (var i = 0; i < animals.length; i++ ) {
    animals[i] = "Awesome " + animals[i];
}

console.log(animals.join());

// Task 2
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var count = 0;
var randomString = "";
while (count < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    count++;
}
console.log(randomString);