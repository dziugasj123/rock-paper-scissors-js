function getComputerChoice(){
    const cchoice = ['Rock', 'Paper', 'Scissors'];
    return cchoice[Math.floor(Math.random() * cchoice.length)];
}

function getHumanChoice(){
    let hchoice = prompt("Choose one: Rock, Paper, Scissors");
    return hchoice;
}

const rules = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
};

function playGame(humanChoice, computerChoice){
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        humanChoice = getHumanChoice().toLowerCase();
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = getComputerChoice();

        console.log("------------ Game " + [i+1] + " ------------");
        console.log("Your choice: " + humanChoice);
        console.log("Computer's choice: " + computerChoice);

        if (humanChoice === computerChoice){
            console.log("The round is tied!");
            humanScore++;
            computerScore++;
        }
        else if (rules[humanChoice] === computerChoice){
            console.log("You've won the round!");
            humanScore++;
        }
        else {
            console.log("You've lost the round.");
            computerScore++;
        }
    }
    if (humanScore === computerScore){
        console.log("---- Game ended in a tie! ----");
    }
    else if (humanScore > computerScore){
        console.log("---- You've won the game! ----")
    }
    else {
        console.log("---- You've lost the game. ----")
    }
    console.log("Game's results: ")
    console.log("Your score: " + humanScore + ", Computer's score: " + computerScore);
}

playGame();