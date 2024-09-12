
function getComputerChoice(){
    let botChoice;
    let botChoiceNum=Math.random();
    if (botChoiceNum<1/3) {
        botChoice="rock";
    }else if ((botChoiceNum>=1/3)&&(botChoiceNum<2/3)) {
        botChoice="paper";
    } else if(botChoiceNum>=2/3){
        botChoice="scissors";
    }
    return botChoice; 
};

function getHumanChoice(){
    let HumanChoice=prompt("Choose wisely !","Rock , Paper , Scissors");
    HumanChoice=HumanChoice.toLowerCase();
    while (HumanChoice!=="rock"&& HumanChoice!=="paper"&& HumanChoice!=="scissors")
     {
        HumanChoice=prompt("Come On ! ♪ You know the Rules and so do i ♪ ,Try Again","ROCK , PAPER , SCISSORS").toLowerCase();
    };
    return HumanChoice;
};

function playRound(CPU,Player){
   
    if(CPU==Player){
        console.log("You Both Picked "+CPU+".\n")
        console.log("Draw ,You Think Like The Machine , isn't that Something ? \n");
        return 1;
    }else if ((Player=="paper" && CPU=="rock")||(Player=="rock" && CPU=="scissors")||(Player=="scissors" && CPU=="paper")) {
        console.log("You Win ! "+Player+" Beats "+CPU+".\n")
        return 2;
    }else if ((Player=="rock" && CPU=="paper")||(Player=="scissors" && CPU=="rock")||(Player=="paper" && CPU=="scissors")) {
        console.log("You Lose ! "+CPU+" Beats "+Player+".\n")
        return 3;
    };
    return res;
};

// Main Game
function playGame(){
    let ComputerScore=0;
    let HumanScore=0;
    while (ComputerScore<3 && HumanScore<3) {
            let CPU=getComputerChoice();
            let Player=getHumanChoice();
        let res=playRound(CPU,Player);
        switch (res) {
            case 2:
            HumanScore++;  
                break;
            case 3:
            ComputerScore++;  
                break;
        };
    console.log("Score is "+HumanScore+":"+ComputerScore);
    };
    if (ComputerScore===3) {
        console.log("You Lose! Good Luck Next Time.");
        
    }else if (HumanScore===3) {
        console.log("You Win !.");
    };
    HumanScore=0;
    ComputerScore=0;
};

playGame();