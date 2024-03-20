playerInput()
function playerInput(){
    const playerArray = [];
    let name = prompt("What is your name?")
    let marker = prompt("Set your marker to X or O")
    console.log("Hello, " + name + "! Your marker is " + marker)
    this.name = name;
    this.marker = marker;
    let arrayAdd = playerArray.push(name + " " + marker)
    console.log (playerArray)
}

function startGame(){
    alert("it works")
}