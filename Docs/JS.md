<h2>

```diff
+ 1. ТИПИ ДАНИХ ТА ЗМІННІ (var/let)
```
</h2>


### Типи даних:
- numbers: 5, 6, 7.34, etc
- strings: "test", "text", etc
- boolean: true, false
- undefined - неозначено
- null - пусте значення

=============================

### Змінні-константи:

var/let/const

```js
var test = "Hello!";
let proba = 5;
const stable = 77;
```

=============================

### Інкрементування та декрементування:

```js
var test = 0;
++test;
1;
++test;
2;
--test;
1;

var test2 = 0;
test2++;
0
test2++;
1
test2;
2
```
============================

+=, -=

```js
var x = 10;
x += 7;
17
x -= 3;
14
```

============================

### Рядки

```js
"test".length;
4

var longString = "My long string is long";
longString.slice(3, 14);
"long string"

longString.toUpperCase();
longString.toLowerCase();
```

============================

### Булеві Змінні

&& (I)

|| (АБО)

! (НЕ)

'>, >=, <, <=' (БІЛЬШЕ НІЖ, МЕНШЕ НІЖ)

==, === (РІВНИЙ ДО, ПОДВІЙНИЙ ЗНАК РІВНОСТІ, ПОТРІЙНИЙ ЗНАК РІВНОСТІ)

```js
var stringNumber = "5";
var actualNumber = 5;
stringNumber === actualNumber;
false
stringNumber == actualNumber; // (не використовується)
true
```

=============================

<h2>

```diff
+ 2. МАСИВИ (ARRAYS)
```

</h2>

```js
[];
[]

var arr1 = []; // пустий масив
var arr2 = [5, "test", true]; // ініциалізований масив

arr2[1];
test

var arr3 = [5, 6, ["test", 123]];
arr3[2][1];
123

arr3.length;
3

var arr4 = [];
arr4.push("test");
arr4.pop();
test
```

==============================

```js
arr4.unshift("test") // теж саме що й push/pop, але бере початок масиву, а не кінець
arr4.shift()
test
```

==============================

### Поєднування масивів

```js
var arr5 = arr3.concat(arr4); // поєднує два масиви
var arr5 = arr4.concat(arr2, arr3); // поєднує більш ніж два масиви
```

==============================

### Пошук у масиві indexOf()

```js
var colors = ["red", "green", "blue"];
colors.indexOf("blue");
2
colors.indexOf("green");
1
```

==============================

### Перетворюємо масив у рядок join()

```js
var colors = ["red", "green", "blue"];
colors.join();
"red,green,blue"
```
<h2>

```diff
+ 3. ОБ'ЄКТИ (OBJECTS)
```
</h2>
ОБ'ЄКТ МАЄ ПОВНУ ІНФОРМАЦІЮ ПРО 1 ЗМІННУ

```js
{ "key1": 99 }
  /         \
Ключ є      Значення,
завжди      що може бути
рядком      різних видів
            (number, string, boolean, etc)
```

-------

### Створення об'єкта 
```js
var cat = {
    "legs": 3,
    "head": 1,
    "color": "red"
};
```
==============================
### Видобування значення із об'єкта
```js
cat["name"];
"Harmony"
```

Або через крапку:

```js
cat.name
```

==============================
### Додавання ключів через крапку
```js
var cat = {} // пустий об'єкт
cat.legs = 3;
cat.name = "Bob1k";
cat.color = "shamanamanam"; // ключ об'єкта
```
==============================
### Поєднання масива та об'єкта (Масив в об'єкті та об'єкт в масиві)

### Обєкт в масиві
```js
var dinosaurs = [
    { name: "T-Rex", period: "late jurassssik" },
    { name: "Abobazayr", period: "same" }
];
```
### Видобуваємо значення
```js
dinosaurs[0]["name"];
"T-Rex";
```
### Масив в об'єкті
```js
var anna = { name: "Anna", age: 11, luckyNambers: [1, 2, 3, 4] };
var dave = { name: "Dave", age: 99, luckyNumbers: [1, 2, 3, 4] };

var friends = [anna, dave]
```
===============================
### Збільшення значень в ключах об'єкта
```js
var owedMoney = {};
owedMoney["Jimmy"] = 5;
--
owedMoney["Jimmy"] += 3;
--
owedMoney["Jimmy"];
8
```


<h2>

```diff
+ 4. ОСНОВИ HTML
```
</h2>

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

### Перші кроки у створенні веб сторінки
```html
<h1>Hello world! </h1>  ======// в кінці завжди ставимо /, наприклад </h1>. 
<p> My first web page.</p> ===  // <h1> - заголовок сайту 
<em>first</em>             ==  // <p> - для поділу на абзаци 
<strong>page</strong>      ==
                           ==
                           == //<em> - видозмінює текст курсивом
                           ==      //<strong> - теж саме, але текст стає ============================== жирним (також елменти <em> та <strong> можна поєднувати)
```
### Структурно цілий HTML документ
```html
<!DOCTYPE html> - //оголошення що це Html документ
<html>
<head> - //зберігає відображаємий вміст 
    <title> </title> - //робить заголовок вікна сайту
    <script>var name = prompt("Whats your name?");
    console.log("Hello " + name);
    </script>
</head>

<body>
    <h1>Hello, world!</h1>
    <p>Let's add another <strong><em>paragraph</em></e></strong>.</p>    
</body>
</html>
```
### Додавання посилань на сайт
```html
<!DOCTYPE html>
<html>
<head>
    <title>My first proper HTML page</title>
</head>

<body>
    <p>Let's add another <strong><em>paragraph</em></e></strong>.</p>
    <p><a href="http://xkcd.com">Click here </a>to red some excellent comics.</p>
</body>
</html>
```
    
<h2>

```diff
+ 5. УМОВНІ ВИРАЗИ ТА ЦИКЛИ (if-else, for)
```
</h2>

```js
    // Щось, що є або true або false
        /
if (condition1) {
    console.log("Якщо condition1 === true");
else if (condition2) {
    console.log("Якщо condition2 === true");
else if (condition3) {
    console.log("Якщо condition3 === true");
} else {
    console.log("Якщо condition1, condition2 та condition3 === false");
}
```

```js
(Скорочене пояснення умовних виразів та циклів)
Умовний вираз твердить: "Якщо якщо якесь твердження має значення true, то вчнітть так, та навпаки"
А цикл буде винувати дію, доки її значення залишається true
```
```js
// Приклад умовного вираза

var lemonChikecken = false;
var beefWithBlack = true;
var sweetAndChtotoTam = true;
if (lemonChikecken) {
    console.log("Great, i have lemon chicken!!!!!!!!!!!");
} else if (beefWithBlack) {
    console.log("OK, i have beef.");
} else if (sweetAndChtotoTam); {
    console.log("blyat,chtoto tam,ladno(((");

    //Функція буде виконуватись поки не знайдеться значення true, якщо значення true не буде, функція не дасть відповіді
}
```
### Твердження
```js
if - буде виконувати функцію тільки якщо її значення буде true.

else - буде виконувати тільки з false.

a else if - може виконувати також тільки якщо її значення буде true.
```

### Цикли
```js
//while цикли - це найпростіші цикли, які виконують функцію поки конкретна умова не стає false, або іншими словами втрачає значення true.
```
### Задача з while циклом
```js
var sheepsCounted = 0;
while (sheepCounted < 10) {
    console.log("i have counted" + sheepCounted + " sheep!");
    sheepCounted++;
}
console.log("Zzzzzzzzzz");

//Відповідь повинна бути така

i have counted 0 sheeps!
i have counted 1 sheeps!
i have counted 2 sheeps!
i have counted 3 sheeps!
i have counted 4 sheeps!
i have counted 5 sheeps!
i have counted 6 sheeps!
i have counted 7 sheeps!
i have counted 8 sheeps!
i have counted 9 sheeps!
Zzzzzzzzzz
```
### for-цикли
```js
//for цикл - продовжує функцію стільки, скільки ви їй скажете (поки не набуде значення true)

Приклад:

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
    console.log("Hello");
};

Що повинно вийти:

Hello
Hello
Hello
```
### Поєднуємо вивчені цикли із масивами та рядками
```js
var animals = ["leon", "Abobys", "Chiwap-chichiwap"];
for (var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a " + animals[i] + ".")
}

Що повинно вийти:

This zoo contains a leon.

This zoo contains a Abobys.

This zoo contains a Chiwap-chichiwap.
```
### Використання циклів у множенні
```js
for (var x = 2; x < 10000; x = x * 2) {
    console.log(x);
}

Що повинно вийти:

2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
```
### Створюємо гру "Вбий негра" з вивченого

```js
<!DOCTYPE html>
<html>

<head>
    <title>"Вбий негра!"</title> 
</head>

<body>
    <h1>"Вбий негра!"</h1>
    <script> //Робимо у Html файлі у рядковому елементі script (іншими словами у тегу script)
        var words = [  //Створюємо слова які будуть обрані випадково
            "javascript",
            "monkey",
            "amazing",
            "pancake",
            "milk",
            "PIDORASSSSSSSSSSS",
            "car",
            "kykyryza",
            "jopa",
            "DimaNeBot"
    


        ];
        var word = words[Math.floor(Math.random() * words.length)];
        var answerArray = [];                 //Робимо команду для випадковості слів
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }

        var remainingLetters = word.length;  
        while (remainingLetters > 0) {
            alert(answerArray.join(" ")); //Процес вигадування слів
            var guess = prompt("Guess a letter, or click Cancel to stop playing."); //умова перед грою
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert("Please enter a single letter."); //Робимо видачу помилки, якщо написано більш ніж 1 буква
            } else {
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--; //Перевіряємо, чи 1 буква та чи вгадав гравець букву
                    }
                }
            }
        }
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word); //Оповішення о перемозі
    </script>
</body>

</html>
```



