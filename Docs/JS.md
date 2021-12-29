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
### Структура цілих HTML документів
```js
<!DOCTYPE html> - //оголошення що це Html документ
<html>
    <head> - //зберігає відображаємий вміст 
        <title> </title> - //робить заголовок вікна сайту
        <script>var name = prompt("Whats your name?");
        console.log("Hello " + name);
        </script>
    </head>
    </html>
```
### Додавання посилань на сайт
```js
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>

    <body>
    <p>Let's add another <strong><em>paragraph</em></e></strong>.</p>
    <p><a href="http://xkcd.com">Click here </a>to red some excellent comics.</p>
    </body>
    </html>
    ```


