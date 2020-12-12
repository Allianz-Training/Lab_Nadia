"use strict";
exports.__esModule = true;
//Lab2.1
console.log("----------Lab2.1-----------");
var num1 = 100;
var num2 = 111;
var num3 = 55;
var num4 = 21;
var num5 = 99;
console.log("a." + num1.toString(8) + " b." + num2.toString(8) + " c." + num3.toString(8) + " d." + num4.toString(8) + " e." + num5.toString(8));
console.log("a." + num1.toString(16) + " b." + num2.toString(16) + " c." + num3.toString(16) + " d." + num4.toString(16) + " e." + num5.toString(16));
var numRound = [12.423, 31313.135, 42.809];
console.log(numRound.map(function (v) { return Math.round(v); }));
//Lab2.2
console.log("----------Lab2.2-----------");
function random(min, max) {
    console.log((Math.random() * (max - min)) + min);
}
random(5, 10);
//Lab2.3
console.log("----------Lab2.3-----------");
var A = false;
var B = true;
var C = false;
console.log((A || (B && C)));
console.log((B || (A || C)));
console.log((B && (A || C)));
//Lab2.4
console.log("----------Lab2.4-----------");
console.log([false, "ABD", 113113, null, "", "13qed"].map(function (v) { return typeof (v); }));
//Lab2.5
console.log("----------Lab2.5-----------");
var student = { prop1: true, prop2: "Hello", prop3: 94, prop4: {} };
var student2 = Object.assign({}, student);
student2.prop2 = null;
console.log(student, student2);
for (var key in student2) {
    console.log(key, student2[key]);
}
student.isActive = true;
console.log(student);
delete student.isActive;
console.log(student);
//Lab2.6
console.log("----------Lab2.6-----------");
var fruits = ["Apples", "Pear", "Orange"];
var shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);
//Lab2.7
console.log("----------Lab2.7-----------");
var stringToArr = "Apple, Cat, Zoo, Bird, Dog";
var input = stringToArr.split(', ').sort();
console.log("1. ", input);
var numArr = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
var strArr = numArr.map(function (v) { return String(v); });
console.log("2. ", strArr.filter(function (v) { return v.startsWith("1"); }));
var fruitArr = ["Apple", "Mango", "Cat", "Banana"];
fruitArr.splice(2, 1, "Orange");
console.log("3. ", fruitArr.sort());
var xArr = [1, 2, 3, 4, 5];
console.log("4. ", xArr.map(function (v) { return Math.pow(v, 2); }));
console.log("5. ", xArr.filter(function (v) { return v > 2; }));
console.log("6. ", xArr.find(function (v) { return v % 2 == 0; }));
var a = [];
xArr.forEach(function (v) {
    a.push(v);
});
console.log("7.  a =", a);
//Homework
console.log("----------Homework-----------");
//Lab2.8
console.log("----------Lab2.8-----------");
var recArea = function (a, b) { return console.log("Area of regtangle: " + a * b); };
recArea(2, 3);
var primeNumber = function (pnumber) {
    var isPrime = true;
    // check if number is equal to 1
    if (pnumber === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (pnumber > 1) {
        // looping through 2 to number-1
        for (var i = 2; i < pnumber; i++) {
            if (pnumber % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(pnumber + " is a prime number");
        }
        else {
            console.log(pnumber + " is a not prime number");
        }
    }
    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }
};
primeNumber(3);
//Lab2.9
console.log("----------Lab2.9.1-----------");
var callIdCard = function (type) {
    console.log(type);
};
var kitty = {
    "Id Number": 22222,
    Name: "Kitty",
    "Date of Birth": "01 JAN 2020"
};
callIdCard(kitty);
console.log("----------Lab2.9.2-----------");
var info = { courseNo: 12345, credit: 3 };
var callCourse = function (type2) {
    console.log(type2);
};
var thai = {
    courseTitle: "Thai",
    information: info
};
callCourse(thai);
