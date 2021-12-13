var randomBodyParts = ["Рот", "Нос", "Глаз", "Палец"];
var randomAdjectives = ["Вонючая", "Тупая", "Кривая", "Корявая"];
var randomWords = ["Дыра", "Гнида", "Чурка", "Шаболда", "Дура"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var randomInsult = "Твой " + randomBodyPart + " как " + randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult);
