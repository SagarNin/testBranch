//1. TypeOf function(Autocasting and Manual casting)
/*
let name="Sachin";
console.log(typeof(name));

let number= 199;
console.log(typeof(number));

let result= true;
console.log(typeof(result));

let obj=sharad;
console.log(typeof(obj)); //Uncaught ReferenceError: sharad is not defined



//2. Manual Type casting with methods

let x = 1000;
console.log(typeof(x)); // Number
console.log(x);

//Convert Number to String using toString() Method();
x = x.toString();
console.log(typeof(x));//string after type conversion/casting
console.log(x);
*/

//3. Manual Type casting with Data Types

let salary=20000;

console.log("Data Type of salary is: "+typeof(salary));

let stringSalary;
console.log("Coverting number to String ");
stringSalary=String(salary);

console.log("Number after converting to string: "+ stringSalary);

console.log("TypeOf salary after conversion : "+ typeof(stringSalary));

console.log("Coverting String to number ");
let numberSalary=Number(stringSalary);

console.log("String after converting to number: "+ numberSalary);

console.log("TypeOf salary after conversion : "+ typeof(numberSalary));