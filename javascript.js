let score;

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
        score[0] = score[0] + 1;
        return result
    } else if(choice == "Rock" && selection == "Scissor" || choice == "Scissor" && selection == "Paper" || choice == "Paper" && selection == "Rock") {
        result = "You loose! " + choice +  " beats " + selection + ".";
        score[1] = score[1] + 1;
        return result  
    } else {
        result = "Its a tie";
        score[2] = score[2] + 1
        return result
    }
    
}

function game(){
    let final;
    score = [0,0,0];
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection(),getComputerChoice()));
    }
    if(score[0]>score[1]){
        final = "You Won! " + score[0] + "-" + score[1] 
        return final
    } else if(score[0]<score[1]){
        final = "You Lost! " + score[0] + "-" + score[1] 
        return final
    } else {
        final = "It's a Tie! " + score[0] + "-" + score[1] 
        return final
    }
    
}