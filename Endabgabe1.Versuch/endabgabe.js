var schwierigkeitLeicht = [
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }
];
//switchcase
//var schwierigkeitsstufenLeicht: Spielen [] = [] [];
var schwierigkeitMitte = [
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false }
];
var schwierigkeitSchwer = [
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false },
    { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false }, { value: "", X: false }
];
var spielFeld1;
//var playerXscore: number = 0;
//var playerOscore: number = 0;
var buttonLeicht1;
var buttonMittel1;
var alleSchwierigkeitsstufen1;
var playerX1;
//ausprobieren
var spielStatus1 = document.querySelector("#player");
var playAgainButton1 = document.querySelector("#playAgain");
var spielactive1 = true;
var xText1 = "O";
var oText1 = "X";
var currentPlayer1 = xText1;
//Ende
window.addEventListener("load", function () {
    spielFeld = document.querySelector("#spielFeld");
    buttonLeicht = document.querySelector("#easy");
    // buttonLeicht.addEventListener("click", drawSpielFeldtodom);
    buttonMittel = document.querySelector("#medium");
    // buttonMittel.addEventListener("click", drawSpielFeldtodom);
    alleSchwierigkeitsstufen1 = document.querySelector("#schwierigkeit");
    // playAgainButton.addEventListener("click", Reset);
});
function drawSpielFeldtodom(schwierigkeit1) {
    spielFeld1.innerHTML = "";
    switch (schwierigkeit1) {
        case "leicht":
            spielFeld1.classList.add("leicht");
            break;
        case "mittel":
            spielFeld1.classList.add("mittel");
            break;
        case "schwer":
            spielFeld1.classList.add("schwer");
            break;
        default:
            console.log("keine Schwierigkeit");
    }
    alleSchwierigkeitsstufen1.innerHTML = ""; //visibility, is-hidden,  
    var _loop_1 = function (index1) {
        var feld1 = document.createElement("div");
        feld1.addEventListener("click", clickOutcome1);
        function clickOutcome1() {
            //Console wirft Nummer von jedem Feld aus.
            console.log(index1);
            if (playerX1 == playerX1) {
                feld1.innerHTML = "<span class='far fa-circle'></span>";
            }
            else {
                feld1.innerHTML = "<span class='X fas fa-times'></span>";
            }
        }
        spielFeld1.classList.add(schwierigkeit1);
        spielFeld1.appendChild(feld1);
    };
    for (var index1 = 0; index1 < schwierigkeitLeicht.length; index1++) {
        _loop_1(index1);
    }
}
function Reset1() {
    console.log("restart!");
}
//alle Gewinnmöglichkeiten
var winsLeicht1 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];
/*function computerSpieltLeicht(): void {
    while (playerXsTurn1 == true) {
        var random1: number = Math.floor(Math.random() * schwierigkeitsstufenLeicht1.length);
        let randomFeld1: Spielen = schwierigkeitsstufenLeicht1.length[random1];
        if (randomFeld1.state == "free") {
            break;
        }
    }
}
*/
//# sourceMappingURL=endabgabe.js.map