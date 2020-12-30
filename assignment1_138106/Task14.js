var a = 2;
var b = 1;
a  = --a;   // a = 1
b = --b;    // b = 0

document.write('--a is : ' + " " + a);document.write("</br>"); 

var x = ++b; // b = 1

var y = b--;


document.write('--a - --b is : ' + " " + (a-b));document.write("</br>"); 
document.write('--a - --b + ++b is : ' + " " + (a-b+x));document.write("</br>"); 
document.write('--a - --b + ++b + b-- is : ' + " " + (a-b+x+y));document.write("</br>");


var result = --a - --b + x + y;


document.write('Result is :' + " " + result);