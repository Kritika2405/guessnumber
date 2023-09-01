
let secretNumber = Math.trunc(20 * Math.random() + 1);

console.log("the correct number is",secretNumber);
let highscore = 0;
var str;
let time = [0,0] ;

document.addEventListener("DOMContentLoaded", function () {


const checkButton = document.querySelector(".check");
const guessInput=document.querySelector(".guess");

function checking(){
    let guess = parseInt(guessInput.value);
    
    let timer =  setInterval(() => {
        time[1]++ ;
        if (time[1] % 60 == 0) 
        {
            time[0]++;
            time[1]=0;
        } 
     str=time[0]+":"+time[1];
     document.getElementById("timer").innerHTML = str;
       
    }, 1000 );
     
    //checkButton.style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Valid input";
        
    }
    else if (guess == secretNumber) {
        document.querySelector(".message").textContent = "You guessed it Right";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").textContent = secretNumber;
        if (highscore < parseInt(document.querySelector(".score").textContent)) highscore = parseInt(document.querySelector(".score").textContent);
        const timing=str;
        clearInterval(timer);
        document.getElementById("timer").innerHTML = timing;
        document.querySelector(".highscore").textContent = highscore;
    }
    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high";
        document.querySelector(".score").textContent--;
        

    }


    else {
        document.querySelector(".message").textContent = "Too low ";
        document.querySelector(".score").textContent--;
        
    }

    if (document.querySelector(".score").textContent <= 0) {
        document.querySelector(".message").textContent = "You lost the Game";
        clearInterval(timer);
        document.getElementById("timer").innerHTML = '';
        document.getElementById("hiddenResult").textContent = secretNumber;
        this.style.backgroundColor = "#f1356d";
    }

}

document.querySelector(".again").addEventListener("click", function () {
    time = [0, 0];
    secretNumber =Math.trunc(20 * Math.random() + 1);
    document.querySelector(".score").textContent = '20';
    document.querySelector(".guess").value = '';
    document.getElementById("timer").innerHTML = '00:00';
    document.querySelector(".check").style.backgroundColor = '#f1356d';
    document.querySelector("body").style.backgroundColor = "white";
    //this.style.backgroundColor = "#ffffff";
    document.querySelector(".number").textContent ="?";
    secretNumber = Math.trunc(20 * Math.random() + 1);
    console.log("the correct number is",secretNumber);
    checking();

    

});
checkButton.addEventListener('click',checking);
})
