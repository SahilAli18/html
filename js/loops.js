let num1 = prompt("enter first number")
let num2 = prompt("enter second number")

let oprator = prompt("select oprator(+,-,/,*)")

if (oprator =="+"){
    let add;
    add = parseInt(num1) + parseInt(num2)
    document.write(add);
}
if (oprator =="-"){
    let add;
    add = num1 - num2;
    document.write(add);
}
if (oprator =="/"){
    let add;
    add = num1 / num2;
    document.write(add);
}
if (oprator =="*"){
    let add;
    add = num1 * num2;
    document.write(add);
}
