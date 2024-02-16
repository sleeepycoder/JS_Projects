
const computerChoiceDisplay =document.getElementById("computer-choice");
const userChoiceDisplay =document.getElementById("user-choice");
const resultDisplay =document.getElementById("result");
const possibleChoices =document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
userChoice =e.target.id;
userChoiceDisplay.innerHTML=userChoice;
getComputerChoices();
getResult();
}));

function getComputerChoices() {
    
const randomNumber =Math.floor(Math.random() *3 )+1 // or u can write possibleChoices.length

if(randomNumber ===1){
    computerChoice="rock"
}
if(randomNumber ===2){
    computerChoice="papper"
}
if(randomNumber ===3){
    computerChoice="scissor"
}

computerChoiceDisplay.innerHTML =computerChoice;
console.log(randomNumber);
}

 function getResult(){
if (computerChoice ===userChoice) {
    result ="its Draw"
}
if (computerChoice === "rock" && userChoice==="papper") {
    result ='You win'
}
if (computerChoice === "rock" && userChoice==="scissor") {
    result ='You lost'
}
if (computerChoice === "papper" && userChoice==="scissor") {
    result ='You win'
}
if (computerChoice === "papper" && userChoice==="rock") {
    result ='You lost'
}
if (computerChoice === "scissor" && userChoice==="rock") {
    result ='You win'
}
if (computerChoice === "scissor" && userChoice==="papper") {
    result ='You lost'
}

resultDisplay.innerHTML =result

}