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
    if(selection == "Rock" && choice == "Scissor" || selection == "Scissor" && choice == "Paper" || selection == "Paper" && choice == "Rock" ){
        return console.log("You win! " + selection +  " beats " + choice + "." )
    } else if(choice == "Rock" && selection == "Scissor" || choice == "Scissor" && selection == "Paper" || choice == "Paper" && selection == "Rock") {
        return console.log("You loose! " + choice +  " beats " + selection + "." )   
    } else {
        return console.log("Its a tie")
    }
    
}