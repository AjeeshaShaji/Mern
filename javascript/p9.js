var a=200;
var b=20;
var op="/";
var c=0;

switch(op)
{
    case "+":c=a+b;
             console.log(c);
             break;
    case "-":c=a-b;
             console.log(c);
             break;
    case "*":c=a*b;
             console.log(c);
             break;
    case "/":c=a/b;
             console.log(c);
             break;
    default:console.log("Invalid Input");
            break;
}