let btns = document.body.querySelectorAll("button");
let results = document.body.querySelector(".results");   

btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        let btnString = btn.innerHTML;

        // Rock Logic
        if (randomNumber === 0 && btnString === "Rock") {
            results.innerHTML = "Draw";
        } else if (randomNumber=== 0 && btnString === "Scissors") {
            results.innerHTML = "Computer Wins";
        } else if (randomNumber === 0 && btnString === "Paper"){
            results.innerHTML = "You Win!";
        }

        // Paper Logic
        if (randomNumber === 1 && btnString === "Paper"){
            results.innerHTML = "Draw";
        } else if (randomNumber === 1 && btnString === "Rock") {
            results.innerHTML = "Computer Wins";
        } else if (randomNumber === 1 && btnString === "Scissors") {
            results.innerHTML = "You Win!";
        }
        // Scissors Logic
        if (randomNumber === 2 && btnString === "Scissors"){
            results.innerHTML = "Draw";
        } else if (randomNumber === 2 && btnString === "Rock") {
            results.innerHTML = "You Win!";
        } else if (randomNumber === 2 && btnString === "Paper") {
            results.innerHTML = "Computer Wins";
        }
        setTimeout(function(){
            window.location.reload()     
        }, 1500)
    })
});

let computerArray = ["Rock","Paper","Scissors"];
let randomNumber = Math.floor(Math.random()* computerArray.length);
if (randomNumber === 0) {
    console.log("Computer picked Rock");
} else if (randomNumber === 1){
    console.log("Computer picked Paper");
} else {
    console.log("Computer picked Scissors");
};

