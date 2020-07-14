
// 1.a function without return Type and Parameters
/* function addition()
{
    console.log(20+21);
}

addition();
*/

// 1.b function without return Type and with Parameters
/*
function addition(number1, number2)
{
    console.log(number1+number2);
}

addition(33,67);
addition(33,-67);
addition("300",-67);
addition("Hello","Welcome");
*/
// 1.c function with return Type and with Parameters
function addition(number1, number2)
{
    return (number1+number2);
}

console.log(addition(33,67));
console.log(addition(33,-67));
console.log(addition("300",-67));
console.log(addition("Hello","Welcome to JavaScript"));
console.log(addition(300,"Spartens"));
