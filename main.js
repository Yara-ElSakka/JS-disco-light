function discoLights(){
document.getElementById("discoLight").style.backgroundColor= rndmLights();
}

function rndmLights(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//Catch the Classes and Count the clicks
let counterDisplay = document.querySelector(".counterDisplay");
let more = document.querySelector(".more");
let less = document.querySelector(".less");

// homework by yara 09.05.2022
let count = 0;

//Call update Display here please first
//code

more.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

//Implement the Minus Function
//code by yara :)

less.addEventListener("click",()=>{
    count--;
    updateDisplay();
}) ;

//code

function updateDisplay(){
    counterDisplay.innerHTML = count;
};
// end of code