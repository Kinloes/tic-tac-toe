//playerInput()
function startGame(){
    const playerArray = [];
    let name = prompt("What is your name?")
    do{
    let marker = prompt("Set your marker to X or O")
    if (((marker) === "o") || ((marker) === "O")){
        marker = "O";
           }       else if (((marker) === "x") || ((marker) === "X")){
                marker = "X"
        } else{
            alert("Please enter either X or O");
            console.log(marker);
        }
    }
    while ((this.marker) != ("X" || "O"))
    console.log(this.marker);
    console.log("Hello, " + name + "! Your marker is " + marker)
    this.name = name;
    this.marker = marker;
    let arrayAdd = playerArray.push(name + " " + marker)
    console.log (playerArray)
}

function TESTALERT(clicked_id){
    console.log(clicked_id);
    let playerMark = document.getElementById(clicked_id);
    console.log(playerMark);
    playerMark.innerText = marker;
    //alert(clicked_id);

}