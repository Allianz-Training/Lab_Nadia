//Lab2.1
console.log("\n----------Lab2.1-----------");
let num1 = 100;
let num2 = 111;
let num3 = 55;
let num4 = 21;
let num5 = 99;
console.log(`a.${num1.toString(8)} b.${num2.toString(8)} c.${num3.toString(8)} d.${num4.toString(8)} e.${num5.toString(8)}`);
console.log(`a.${num1.toString(16)} b.${num2.toString(16)} c.${num3.toString(16)} d.${num4.toString(16)} e.${num5.toString(16)}`);
let numRound = [12.423, 31313.135, 42.809];
console.log(numRound.map(v => Math.round(v)));
//Lab2.2
console.log("\n----------Lab2.2-----------");
function random(min, max) {
    console.log((Math.random() * (max - min)) + min);
}
random(5, 10);
//Lab2.3
console.log("\n----------Lab2.3-----------");
let A = false;
let B = true;
let C = false;
console.log((A || (B && C)));
console.log((B || (A || C)));
console.log((B && (A || C)));
//Lab2.4
console.log("\n----------Lab2.4-----------");
console.log([false, "ABD", 113113, null, "", "13qed"].map(v => typeof (v)));
//Lab2.5
console.log("\n----------Lab2.5-----------");
let student = { prop1: true, prop2: "Hello", prop3: 94, prop4: {} };
let student2 = Object.assign({}, student);
student2.prop2 = null;
console.log(student, student2);
for (let key in student2) {
    console.log(key, student2[key]);
}
student.isActive = true;
console.log(student);
delete student.isActive;
console.log(student);
//Lab2.6
console.log("\n----------Lab2.6-----------");
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);
//Lab2.7
console.log("\n----------Lab2.7-----------");
let stringToArr = "Apple, Cat, Zoo, Bird, Dog";
let input = stringToArr.split(', ').sort();
console.log("1. ", input);
let numArr = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
let strArr = numArr.map(v => String(v));
console.log("2. ", strArr.filter(v => v.startsWith("1")));
let fruitArr = ["Apple", "Mango", "Cat", "Banana"];
fruitArr.splice(2, 1, "Orange");
console.log("3. ", fruitArr.sort());
let xArr = [1, 2, 3, 4, 5];
console.log("4. ", xArr.map(v => Math.pow(v, 2)));
console.log("5. ", xArr.filter(v => v > 2));
console.log("6. ", xArr.find(v => v % 2 == 0));
let a = [];
xArr.forEach(v => {
    a.push(v);
});
console.log("7.  a =", a);
//Homework
console.log("\n----------Homework-----------");
//Lab2.8
console.log("\n----------Lab2.8-----------");
let recArea = (a, b) => console.log(`Area of regtangle: ${a * b}`);
recArea(2, 3);
let primeNumber = (pnumber) => {
    let isPrime = true;
    // check if number is equal to 1
    if (pnumber === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (pnumber > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < pnumber; i++) {
            if (pnumber % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${pnumber} is a prime number`);
        }
        else {
            console.log(`${pnumber} is a not prime number`);
        }
    }
    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }
};
primeNumber(3);
//Lab2.9
console.log("\n----------Lab2.9.1-----------");
let callIdCard = (type) => {
    console.log(type);
};
let kitty = {
    "Id Number": 22222,
    Name: "Kitty",
    "Date of Birth": "01 JAN 2020"
};
callIdCard(kitty);
console.log("\n----------Lab2.9.2-----------");
let callCourse = (type2) => {
    console.log(type2);
};
const info = { courseNo: 12345, credit: 3 };
let thai = {
    courseTitle: "Thai",
    information: info
};
callCourse(thai);
//Lab2.10
console.log("\n----------Lab2.10-----------");
var translationEnum;
(function (translationEnum) {
    translationEnum["English"] = "English";
    translationEnum["Thai"] = "Thai";
    translationEnum["French"] = "French";
    translationEnum["Dutch"] = "Dutch";
})(translationEnum || (translationEnum = {}));
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// ask user for the input
rl.question(`Enter a number(1-4): `, (getInput) => {
    let input = parseInt(getInput);
    switch (input) {
        case 1:
            console.log(`${input} is ${translationEnum.English}.`);
            break;
        case 2:
            console.log(`${input} is ${translationEnum.Thai}. `);
            break;
        case 3:
            console.log(`${input} is ${translationEnum.French}. `);
            break;
        case 4:
            console.log(`${input} is ${translationEnum.Dutch}. `);
            break;
        default:
            console.log(`${input} is invalid. `);
    }
    rl.close();
});
//Lab2.11
console.log("\n----------Lab2.11-----------");
let genericArr = new Array();
genericArr.push(1);
// genericArr.push("text"); This code returns an error
let genericMap = new Map();
genericMap.set("age", 17);
genericMap.set("heigth", 180);
console.log(genericMap.get("age"));
//End
//# sourceMappingURL=app2.js.map