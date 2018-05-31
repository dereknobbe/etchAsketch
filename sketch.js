var gameWindow = document.querySelector(".game");
var startSize = 4;
var reset = document.getElementById("resetButton");
var newGame = document.getElementById("newGameButton");
var inputField = document.getElementById("inputField");
console.log(inputField);
var iteration = 0;
for (j = 0; j < (startSize * startSize); j++) {
    for (i = 0; i < (startSize * startSize); i++) {
        var newSquare = document.createElement("div");
        newSquare.id = iteration.toString();
        console.log(iteration);
        newSquare.style.backgroundColor = "white";
        gameWindow.appendChild(newSquare);
        iteration++;
    }
}

reset.addEventListener("click",function() {
    for (i = 0; i < gameWindow.childNodes.length; i++) {
        var currentBox = document.getElementById(i.toString());
        document.getElementById(i.toString()).style.backgroundColor = "white";
    }
});

newGame.addEventListener("click", function() {
    if (isNaN(inputField.value)) {
        alert("Please input an integer");
        console.log("help");
        return;
    } else if (inputField.value.length == 0) {
        alert("Please input an integer");
        return;
    }
    
    else {
    for (i = 0; i < iteration; i++) {
        console.log(iteration);
        console.log(i);
        var removeThis = document.getElementById(i.toString());
        gameWindow.removeChild(removeThis);
    }
    var newSize = inputField.value; 
        console.log(newSize);
    gameWindow.style.gridTemplateColumns = "repeat(" + newSize.toString() + ",1fr)";
    gameWindow.style.gridTemplateRows = "repeat(" + newSize.toString() + ",1fr)";
    iteration = 0;
    for (j = 0; j < newSize; j++) {
        for (i = 0; i < newSize; i++) {
        var newSquare = document.createElement("div");
        newSquare.id = iteration.toString();
        newSquare.style.backgroundColor = "white";
        gameWindow.appendChild(newSquare);
        iteration++;
    }
}
    assignListeners();
    }

    
});

console.log(gameWindow);
assignListeners();
function assignListeners() {
gameWindow.childNodes.forEach(square => {
    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "black";
    });
});
}