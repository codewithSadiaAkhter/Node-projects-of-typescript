var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var Addbtn = document.getElementById("Add");
var subbtn = document.getElementById("sub");
var Multbtn = document.getElementById("Mult");
var Divbtn = document.getElementById("Divide");
var printresult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printresult.textContent = result.toString();
}
Addbtn.addEventListener("click", AddNumbers);
function subtractNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printresult.textContent = result.toString();
}
subbtn.addEventListener("click", subtractNumbers);
function MultiplyNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printresult.textContent = result.toString();
}
Multbtn.addEventListener("click", MultiplyNumbers);
function DivideNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printresult.textContent = result.toString();
}
Divbtn.addEventListener("click", DivideNumbers);
