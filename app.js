let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock,paper,scissor
};

const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again.."
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congratulations! You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`Oops! You Lose Better Luck Next Time. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
    {
    // draw game
    drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            // if users choice is rock then computers choice is either paper or scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            // if users choice is paper then computers choice is either rock or scissor
           userWin = compChoice === "scissor" ? false : true;
        }
        else{
           // if users choice is scissor then computers choice is either rock or paper 
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});