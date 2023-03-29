/**
 * Prompt user for gameID
 * Send post request to connect game endpoint
 *
 */
function joinGameWithID(){

    const gameId = prompt("Enter game ID: ", "")
    if(gameId != null){
        window.location.href = "/game?gameID=" + gameId;
    }
}

/**
 * Create new game
 */
function createNewGame(){

    console.log("Creating a new game...")
    postText(getPlayerIDFromCookie())
        .then(response => {
            window.location.replace("/game")
            updateNames(response)
            return response;
        })

}


/**
 * Function used to update the game state
 *
 * @param gameState
 * @param gameBoard
 */
function updateGameState(gameState, gameBoard){

    const RED_CHIP = "../images/red-chip.png";
    const YELLOW_CHIP = "../images/yellow-chip.png";

    const img = document.createElement("img");

    const row = gameState["pieceRow"];
    const col = gameState["pieceCol"];

    const cell = gameBoard.rows[row].cells[col];

    if(gameState["lastPlayed"]["gamePiece"] == "RED"){
        img.src = RED_CHIP;
    } else{
        img.src = YELLOW_CHIP;
    }


    cell.appendChild(img);

}


function endGame(){
    window.location.replace("/"); // Send back to home page
    stompClient.disconnect(); // Close socket connection
}
