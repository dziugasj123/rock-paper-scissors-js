const list = document.querySelector(".list");
const buttons = document.querySelectorAll('.selection');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const selection = button.dataset.choice;
        playGame(selection);
    });
});

function getComputerChoice(){
    const cChoice = ['Rock', 'Paper', 'Scissors'];
    return cChoice[Math.floor(Math.random() * cChoice.length)];
}

const rules = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
};

let humanScore = 0;
let computerScore = 0;

function playGame(selection){
    const computerSelection = getComputerChoice();
    const humanSelection = selection;

    list.innerHTML = "";

    const liElement = document.createElement("li");
    const spanElement1 = document.createElement("span");
    const spanElement2 = document.createElement("span");
    const winDec1 = document.createElement("p");
    const winDec2 = document.createElement("p");

    liElement.append(spanElement1,spanElement2,winDec1,winDec2);

    spanElement1.textContent = "Your choice: " + humanSelection + ", Computer's choice: " + computerSelection + " ";
    if (humanSelection === computerSelection){
        spanElement2.textContent = "The round is tied!";
    }
    else if (rules[humanSelection] === computerSelection){
        spanElement2.textContent = "You've won the round!";
        humanScore++;
    }
    else {
        spanElement2.textContent = "You've lost the round.";
        computerScore++;
    }

    if (humanScore === 5) winDec1.textContent = "---- You've won the game! ----";
    else if (computerScore === 5) winDec1.textContent = "---- You've lost the game. ----";

    if (humanScore === 5 || computerScore === 5){
        winDec2.textContent = "Your score: " + humanScore + ", Computer's score: " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    
    list.appendChild(liElement);
}
