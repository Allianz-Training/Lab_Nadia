//Lab1.1
let text;
text = 'Hello World';
console.log(text);
//Lab1.2
let string = 'Something';
console.log(string.length);
console.log(string.charAt(0));
console.log(string[0]);
let Hello = 'Hello';
let world = 'world';
console.log(`${Hello} ${world}`);
//Lab1.3
let excel = `microsoft excel`.toUpperCase();
let google = `GOOGLE AND APPLE`.toLowerCase();
console.log(`1.${excel} \n2.${google}`);
let helloworld = `hello world`;
let newHelloworld = '3.' + helloworld[0].toUpperCase() + helloworld.substring(1, 5) + ' ' + helloworld[6].toUpperCase() + helloworld.substring(7);
console.log(newHelloworld);
//Lab1.4 a
console.log(text.startsWith('Hello'));
console.log(text.startsWith('World'));
console.log(text.endsWith('Hello'));
console.log(text.endsWith('World'));
//Lab1.4 b
let t1 = 'Computer';
let t2 = 'Death Race';
let t3 = 'Republican';
console.log(`a. ${t1.slice(3, 6)} b. ${t2.slice(0, 5)} c. ${t3.slice(2, 8)}`);
//Lab1.5.1
let num_a = 1000000;
let num_b = 10000000;
let num_c = 43000000000;
let num_d = 0.000012;
let num_e = 0.0000001234;
console.log(`a. ${num_a.toExponential()} b. ${num_b.toExponential()} c. ${num_c.toExponential()} d. ${num_d.toExponential()} e. ${num_e.toExponential()}`);
//Lab1.5.2
let num_ae = 1e10;
let num_be = 2e5;
let num_ce = 122e8;
let num_de = 1e-8;
let num_ee = 12e-5;
console.log(`a. ${num_ae.toString()} b. ${num_be.toString()} c. ${num_ce.toString()} d. ${num_de.toString()} e. ${num_ee.toString()}`);
//End
//# sourceMappingURL=app.js.map