

interface Spielen2 {
   
    value: string;
    X: boolean;
}


var schwierigkeitLeicht: Spielen2[] = [
    { value: "", X: false}, { value: "" , X: false}, { value: "" , X: false},
    { value: "" , X: false}, { value: "" , X: false}, { value: "", X: false },
    { value: "" , X: false}, { value: "" , X: false}, { value: "" , X: false}

];
//switchcase


//var schwierigkeitsstufenLeicht: Spielen [] = [] [];


var schwierigkeitMitte: Spielen2[] = [
    { value: "" , X: false}, { value: "", X: false }, { value: "" , X: false}, { value: "", X: false },
    { value: "" , X: false}, { value: "" , X: false}, { value: "", X: false }, { value: "", X: false },
    { value: "" , X: false}, { value: "" , X: false}, { value: "" , X: false}, { value: "" , X: false},
    { value: "" , X: false}, { value: "" , X: false}, { value: "" , X: false}, { value: "" , X: false}

];

var schwierigkeitSchwer: Spielen2[] = [
    { value: "", X: false}, { value: "", X: false}, { value: "", X: false}, { value: "", X: false}, { value: "", X: false},
    { value: "", X: false}, { value: "", X: false}, { value: "", X: false}, { value: "", X: false }, { value: "", X: false},
    { value: "", X: false}, { value: "", X: false}, { value: "", X: false}, { value: "", X: false}, { value: "", X: false },
    { value: "", X: false}, { value: "", X: false}, { value: "", X: false}, { value: "", X: false}, { value: "", X: false },
    { value: "", X: false}, { value: "", X: false}, { value: "", X: false }, { value: "", X: false}, { value: "", X: false}
];




var spielFeld1: HTMLElement;

//var playerXscore: number = 0;
//var playerOscore: number = 0;
var buttonLeicht1: HTMLElement;
var buttonMittel1: HTMLElement;
var alleSchwierigkeitsstufen1: HTMLElement;
var playerX1: HTMLElement;


//ausprobieren
const spielStatus1: HTMLElement = document.querySelector("#player");
let playAgainButton1: HTMLElement = document.querySelector("#playAgain");
let spielactive1: boolean = true;

const xText1: string = "O";
const oText1: string = "X";

let currentPlayer1: string = xText1;

//Ende

window.addEventListener("load", function (): void {

    spielFeld = document.querySelector("#spielFeld");
    
    buttonLeicht = document.querySelector("#easy");
   // buttonLeicht.addEventListener("click", drawSpielFeldtodom);
    buttonMittel = document.querySelector("#medium");
   // buttonMittel.addEventListener("click", drawSpielFeldtodom);
    alleSchwierigkeitsstufen1 = document.querySelector("#schwierigkeit");
    // playAgainButton.addEventListener("click", Reset);
});


function drawSpielFeldtodom(schwierigkeit1: string ): void {
    
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
    for (let index1: number = 0; index1 < schwierigkeitLeicht.length; index1++) {

        let feld1: HTMLElement = document.createElement("div");
        


        feld1.addEventListener("click", clickOutcome1);

        function clickOutcome1(): void {
            //Console wirft Nummer von jedem Feld aus.
            console.log(index1);
            
            
            if (playerX1 == playerX1) {
                
                feld1.innerHTML = "<span class='far fa-circle'></span>";
           
            } else {
                feld1.innerHTML = "<span class='X fas fa-times'></span>";
            }
            
            
        }
        spielFeld1.classList.add(schwierigkeit1); 
        spielFeld1.appendChild(feld1);

        
    }
    
}




function Reset1(): void {
    console.log("restart!");
}


//alle Gewinnmöglichkeiten
let winsLeicht1 = [
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
