var randomBodyParts = ["Рот", "Нос", "Глаз", "Палец"];
var randomAdjectives = ["Вонючее", "Тупее", "Кривее", "Корявее"];
var randomAnimales = ["Котячий", "Козлячий", "Свинячий", "Собачий"];
var randomeAnimaleParts = ["Рот", "Нос", "Котях", "Ноготь"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimale = randomAnimales[Math.floor(Math.random() * randomAnimales.length)];
var randomeAnimalePart = randomeAnimaleParts[Math.floor(Math.random() * randomeAnimaleParts.length)];
var randomInsult = "Твой " + randomBodyPart + " " + randomAdjective + ", чем " + randomAnimale + " " + randomeAnimalePart + "!!!";
console.log(randomInsult);
