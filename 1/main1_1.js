/// <reference path="jquery-3.4.1.js" />

$(() => {
    const userColor = prompt("Choose a color: red, green, blue, yellow, magenta, cyan, black, white, gray");
    getColor()
    
function getColor() {
    try {
        if(userColor === "red"|| userColor === "green"|| userColor === "blue"||
        userColor === "yellow"|| userColor === "magenta"|| userColor === "cyan"||
        userColor === "black"|| userColor === "white"|| userColor === "gray");
        colorBg("userColor");   
    }
    catch (err) {
        alert("Error: " + err.message);
    }
}

function colorBg(color){
    $("body").css("background-color", userColor);

}

    }); //RF