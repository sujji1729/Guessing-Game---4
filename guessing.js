let guessNumber = document.getElementById("guessNumber");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);


function clickButton() {

    let guessNumberInput = parseInt(guessNumber.value);
    
    if (guessNumberInput > randomNumber) {

        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }

    else if (guessNumberInput < randomNumber) {

        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }

    else if (guessNumberInput === randomNumber) {

        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";
    }

    else {

        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
    }

}