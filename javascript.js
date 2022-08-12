let score = [0,0];
let update = ' ' + score[0] +  '-' + score[1];

function getComputerChoice(){
    let choice = ["Rock", "Paper","Scissor"];
    let random =  Math.floor(Math.random()*choice.length);
    return choice[random];
}

function playRound(selection,choice){
    let result ='';
    const div = document.querySelector(".results");
    if(selection == "Rock" && choice == "Scissor" || selection == "Scissor" && choice == "Paper" || selection == "Paper" && choice == "Rock" ){
        score[0] = score[0] + 1;
        update = ' ' + score[0] +  '-' + score[1];
        result = "You win! " + selection +  " beats " + choice + "." + update;       
        div.textContent = result;
        return 
    } else if(choice == "Rock" && selection == "Scissor" || choice == "Scissor" && selection == "Paper" || choice == "Paper" && selection == "Rock") {
        score[1] = score[1] + 1;
        update = ' ' + score[0] +  '-' + score[1];
        result = "You loose! " + choice +  " beats " + selection + "." + update;
        div.textContent = result;
        return  
    } else {
        update = ' ' + score[0] +  '-' + score[1];
        result = "Its a tie" + update;
        div.textContent = result;
        return 
    }
    
}


function winner(random){
    const div = document.querySelector(".results");
    playRound(random,getComputerChoice());
    
    if(score[0] == 5){
        div.textContent = "You won the GAME!" + update;
        score = [0,0]
        
    } else if(score[1] == 5){
        div.textContent = "You lost the GAME!" + update;
        score = [0,0] 
    } 

}

function playerSelection(e){
    const choice = e.target.className;
    if(!choice) return;
    console.log(choice);
    winner(choice);

}


window.addEventListener('click', playerSelection);









//window.addEventListener('click', function(e){
    //const choice = e.target.className;
    //if(!choice) return;
    //console.log(choice);

//})




//    const div = document.querySelector('.results')
//console.log(div);