let bill = document.getElementById("bill");
let numberOfPeople = document.getElementById("NOP");
let amount = document.getElementById("amount");
let total = document.getElementById("total");

////////////////
let ButtonFive = document.getElementById("5percent");
ButtonFive.addEventListener("click", calculateFive);

function calculateFive() {
    let resultOne = bill.value * 5;
    let resultTwo = resultOne / 100;
    let resultThree = resultTwo / numberOfPeople.value;
    let resultFour = bill.value / resultThree;
    amount.innerHTML = resultThree;
    total.innerHTML = resultFour;
    document.getElementById("5percent").style.backgroundColor = "hsl(148, 36%, 40%)";
    document.getElementById("10percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("15percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("25percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("50percent").style.backgroundColor = "hsl(183, 100%, 15%)";
};


////////////////
let Buttonten = document.getElementById("10percent");
Buttonten.addEventListener("click", calculateTen);

function calculateTen() {
    let resultOne = bill.value * 10;
    let resultTwo = resultOne / 100;
    let resultThree = resultTwo / numberOfPeople.value;
    let resultFour = bill.value / resultThree;
    amount.innerHTML = resultThree;
    total.innerHTML = resultFour;
    document.getElementById("10percent").style.backgroundColor = "hsl(148, 36%, 40%)";
    document.getElementById("5percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("15percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("25percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("50percent").style.backgroundColor = "hsl(183, 100%, 15%)";
};


////////////////
let ButtonFivteen = document.getElementById("15percent");
ButtonFivteen.addEventListener("click", calculateFivteen);

function calculateFivteen() {
    let resultOne = bill.value * 15;
    let resultTwo = resultOne / 100;
    let resultThree = resultTwo / numberOfPeople.value;
    let resultFour = bill.value / resultThree;
    amount.innerHTML = resultThree;
    total.innerHTML = resultFour;
    document.getElementById("15percent").style.backgroundColor = "hsl(148, 36%, 40%)";
    document.getElementById("5percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("10percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("25percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("50percent").style.backgroundColor = "hsl(183, 100%, 15%)";
};


////////////////
let ButtonTwenyFive = document.getElementById("25percent");
ButtonTwenyFive.addEventListener("click", calculateTwenyFive);

function calculateTwenyFive() {
    let resultOne = bill.value * 25;
    let resultTwo = resultOne / 100;
    let resultThree = resultTwo / numberOfPeople.value;
    let resultFour = bill.value / resultThree;
    amount.innerHTML = resultThree;
    total.innerHTML = resultFour;
    document.getElementById("25percent").style.backgroundColor = "hsl(148, 36%, 40%)";
    document.getElementById("5percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("10percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("15percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("50percent").style.backgroundColor = "hsl(183, 100%, 15%)";
};


////////////////
let ButtonFifty = document.getElementById("50percent");
ButtonFifty.addEventListener("click", calculateFifty);

function calculateFifty() {
    let resultOne = bill.value * 50;
    let resultTwo = resultOne / 100;
    let resultThree = resultTwo / numberOfPeople.value;
    let resultFour = bill.value / resultThree;
    amount.innerHTML = resultThree;
    total.innerHTML = resultFour;
    document.getElementById("50percent").style.backgroundColor = "hsl(148, 36%, 40%)";
    document.getElementById("5percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("10percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("15percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("25percent").style.backgroundColor = "hsl(183, 100%, 15%)";
};


////////////////
let ButtonCustome = document.getElementById("custome-input");
ButtonCustome.addEventListener("focusout", calculateCustome);

function calculateCustome() {
    let resultOne = bill.value * ButtonCustome.value;
    let resultTwo = resultOne / 100;
    let resultThree = resultTwo / numberOfPeople.value;
    let resultFour = bill.value / resultThree;
    amount.innerHTML = resultThree;
    total.innerHTML = resultFour;
    document.getElementById("5percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("10percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("15percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("25percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("50percent").style.backgroundColor = "hsl(183, 100%, 15%)";
};


////////////////
let resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", reset);
function reset() {
    amount.innerHTML = "$0.00"
    total.innerHTML = "$0.00"
    ButtonCustome.value = "custome"
    numberOfPeople.value = "0"
    bill.value = "0"
    document.getElementById("5percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("10percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("15percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("25percent").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("50percent").style.backgroundColor = "hsl(183, 100%, 15%)";
}


console.log("Challenge by Frontend Mentor - https://www.frontendmentor.io?ref=challenge. Coded by Hossein rahmati - https://github.com/hosseinrmt.");