// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playGame("Rock");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playGame("Paper");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playGame("Scissors");
});



function getComputerChoice() {
  //Generate a random choice for the computer
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  }
  if (randomNumber === 1) {
    return "Paper";
  }
  
  return "Scissors";
}

function playGame(playerChoice) {
  //Get the computer's choice
  const computerChoice = getComputerChoice();

  let message = `You chose: ${playerChoice} <br> Computer chose: ${computerChoice}`;

  let result = "";

  //Tie check
  if(playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  //Add result to the message
  message = `${message}<br>${result}`;

  //Show message on page
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = message;
}