const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const Addbtn = document.getElementById("Add") as HTMLButtonElement
const subbtn = document.getElementById("sub") as HTMLButtonElement
const Multbtn = document.getElementById("Mult") as HTMLButtonElement
const Divbtn = document.getElementById("Divide") as HTMLButtonElement 

const printresult = document.getElementById("result") as HTMLOutputElement


function AddNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printresult.textContent = result.toString();
}
Addbtn.addEventListener("click", AddNumbers)

function subtractNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printresult.textContent = result.toString()
} 

subbtn.addEventListener("click", subtractNumbers)

function MultiplyNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printresult.textContent = result.toString()
} 

Multbtn.addEventListener("click", MultiplyNumbers)

function DivideNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;
    printresult.textContent = result.toString()
} 

Divbtn.addEventListener("click", DivideNumbers)
