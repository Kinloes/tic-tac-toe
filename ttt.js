//playerInput()
let marker = ""
let PCmarker = ""
function startGame(){
    const playerArray = [];
    let name = prompt("What is your name?")
    do{
    marker = prompt("Set your marker to X or O")
    if (((marker) === "o") || ((marker) === "O")){
        marker = "O";
           }       else if (((marker) === "x") || ((marker) === "X")){
                marker = "X"
        } else{
            alert("Please enter either X or O");
            console.log(marker);
        }
    }
    while ((marker) != "X" && (marker) != "O");
    console.log(this.marker);
    console.log("Hello, " + name + "! Your marker is " + marker);
    this.name = name;
    this.marker = marker;
    let arrayAdd = playerArray.push(name + " " + marker);
    console.log (playerArray);
    if (marker === "X"){
        PCmarker = "O";
    }
    else if (marker === "O"){
        PCmarker = "X";
    }
    if (name === ""){
        name = "Nameless One";
    }
    const startBut = document.getElementById("startButton");
    startBut.remove();
    const resetButton = document.getElementById("resetButton")
    resetButton.style.display = "block";
}

function addMarker(clicked_id){
    console.log(clicked_id);
    let playerMark = document.getElementById(clicked_id);
    if (playerMark.innerText === "X" || playerMark.innerText === "O"){
        alert("That spot has been taken, please pick another")}
        else{
    console.log(playerMark);
    playerMark.innerText = marker;
    function TEST(){
        let PCchoice = document.getElementById("d1")
        PCchoice.innerHTML = "O"
    }
    setTimeout(TEST, 1000);
        }
}
function resetGame(){
    for (let i = 1; i < 10; i++){
    let clearBoard = document.getElementById("d" + [i])
    clearBoard.innerHTML = ""
    }
}