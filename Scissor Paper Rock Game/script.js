
let choices = document.querySelectorAll(".container1");
let play = document.querySelector(".para");
let ourscorebef = document.querySelector(".zero");
let compscorebef = document.querySelector(".zero1");
let changecolor = document.querySelector(".last");



let userscore = 0;
let compscore = 0;


choices.forEach((choice) =>{
choice.addEventListener("click", ()=>{
    const userchoice = choice.getAttribute("id");
game(userchoice);





});
});


//function to display who win
function showwinner(userwin, userchoice, compchoice){
if(userwin ){

    console.log("You Won");
    play.innerHTML = `You Won! Your ${userchoice} beats Computer's ${compchoice}`;
    
    userscore ++;
    ourscorebef.innerHTML = userscore;
    play.style.background ="green";
    
}
else{
    console.log("Computer win");
    play.innerHTML = `Computer Won"! computer's ${compchoice} beats your ${userchoice}`;
    compscore ++;
    compscorebef.innerHTML = compscore;
    play.style.background ="red";
    
   
}
}



//function to display that the game was draw
 function draw(){
    play.style.background = "";
    console.log("The game was draw");
    play.innerHTML = "The game was draw";
};

//function to display user and computer choice
const game = (userchoice)=>{
console.log("User choice = ", userchoice);
let compchoice = gencompchoice();
console.log("Computer choice = ", compchoice);



let userwin = true;


if(userchoice === compchoice){
    draw();
    
}



else{

    

    if(userchoice === "rock"){
        userwin = compchoice ==="paper" ? false : true;
    }

    else if(userchoice === "paper"){
        userwin = compchoice ==="scissor" ? false : true;
    }
    else{
        userwin = compchoice ==="rock" ? false : true;

    }
    showwinner(userwin,userchoice,compchoice);

}



};


//function to generate computer random number to convert it in array
let gencompchoice = ()=>{
    const arr = ["scissor", "paper", "rock"];
    const ran = Math.floor( Math.random() * 3);
    return arr[ran];
   
}





