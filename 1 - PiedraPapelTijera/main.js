const computer_choice_display = document.getElementById('computer-choice');
const user_choice_display = document.getElementById('user-choice');
const result_display = document.getElementById('result');

const possibleChoices = document.querySelectorAll("button");

let user_choice;
let computer_choice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    user_choice = e.target.id;
    user_choice_display.innerHTML = user_choice;
    randomNumberGenerator();
    getResult();
}))



function randomNumberGenerator(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if(randomNumber === 0){
        computer_choice = "rock";
    }

    if(randomNumber === 1){
        computer_choice = "pappers";
    }

    if(randomNumber === 2){
        computer_choice = "scissors";
    }
    computer_choice_display.innerHTML = computer_choice;
}

function getResult(){
    if(computer_choice === user_choice){
        result = "It's a draw!";
    }

    if(computer_choice === "rock" && user_choice === "scissors"){
        result = "Computer wins :(";
    }

    if(computer_choice === "rock" && user_choice === "pappers"){
        result = "User wins :)";
    }

    if(computer_choice === "pappers" && user_choice === "scissors"){
        result = "User wins :)";
    }

    if(computer_choice === "pappers" && user_choice === "rock"){
        result = "Computer wins :(";
    }

    
    if(computer_choice === "scissors" && user_choice === "rock"){
        result = "User wins :)";
    }

    if(computer_choice === "scissors" && user_choice === "pappers"){
        result = "Computer wins :(";
    }


    result_display.innerHTML = result;
}
