function getComputerChoice(){
    let choice = ["Rock", "Paper","Scissor"];
    let random =  Math.floor(Math.random()*choice.length);
    return choice[random];
}

function playerSelection(){
    let choice = prompt("Choose: Rock, Paper, Scissor");
    let fixChoice = choice[0].toUpperCase() + choice.slice(1)
    return fixChoice
}

function playRound(selection,choice){
    let result;
    if(selection == "Rock" && choice == "Scissor" || selection == "Scissor" && choice == "Paper" || selection == "Paper" && choice == "Rock" ){
        result = "You win! " + selection +  " beats " + choice + ".";
        return result
    } else if(choice == "Rock" && selection == "Scissor" || choice == "Scissor" && selection == "Paper" || choice == "Paper" && selection == "Rock") {
        result = "You loose! " + choice +  " beats " + selection + ".";
        return result  
    } else {
        result = "Its a tie"
        return result
    }
    
}

console.log(playRound(playerSelection(), getComputerChoice()));