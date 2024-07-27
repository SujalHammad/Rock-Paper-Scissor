let userScore=0;
let compScore=0;

let userInitialScore=document.querySelector("#user-score");
let compInitialScore=document.querySelector("#comp-score");


let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let rdmInd=Math.floor(Math.random()*3);
    return options[rdmInd];
}
const drawGame=(userChoice,compChoice)=>{
    msg.innerText=`game is draw, your choice ${userChoice} is same as computer choice ${compChoice}`;
    msg.style.backgroundColor="#081b31";
    
}
const scoreUpdate=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userInitialScore.innerText=userScore;
        msg.innerText=`you win, your choice ${userChoice} beats computer choice ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compInitialScore.innerText=compScore;
        msg.innerText=`you loss, computer choice ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userWin=true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
          } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
          } else {
            userWin = compChoice === "rock" ? false : true;
          }
    scoreUpdate(userWin,userChoice,compChoice);
}
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
})
