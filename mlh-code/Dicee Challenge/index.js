
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


if (randomNumber1 > randomNumber2) {
  document.querySelector(".drumPlayer").innerHTML = "🚩 Player 1 go ahead!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector(".drumPlayer").innerHTML = "Player 1 go ahead!🚩";
}
else {
  document.querySelector(".drumPlayer").innerHTML = "Let's do a duet!";
}




//detecting click
var numberOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
       
    });
}

//detecting keyboard press

document.addEventListener("keypress", function (event){
     makeSound(event.key);
     buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break; 
            
        case "s":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
            
        case "d":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;  
            
            
        case "j":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            
        case "k":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break; 
            
        case "l":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;  
            
        default: console.log(buttonInnerHTML);   

    }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed")},100);
    
}

