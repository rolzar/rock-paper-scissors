function getComputerChoice(){
    let choice = ["Rock", "Paper","Scissor"];
    let random =  Math.floor(Math.random()*choice.length);
    return choice[random];

}

function playerSelection(){
    let choice = prompt("Choose: Rock, Paper, Scissor");
    return choice
}

