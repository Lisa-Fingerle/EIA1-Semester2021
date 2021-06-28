
interface Feld {
    value: string;
    clicked: boolean;
}

var schwierigkeitsstufeLeicht: Feld[] = [
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }
];

var schwierigkeitsstufeMittel: Feld[] = [
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }

];

var schwierigkeitsstufeSchwer: Feld[] = [
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false },
    { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }, { value: "", clicked: false }
];

//Variablen deklariert

var spielFeld: HTMLElement;
var playerXscore: number = 0;
var playerOscore: number = 0;
var buttonLeicht: HTMLElement;
var buttonMittel: HTMLElement;
var buttonSchwer: HTMLElement;
var alleSchwierigkeitsstufen: HTMLElement;

var playerXoutput: string = "X";
var playerOoutput: string = "O";

let currentPlayer: string = playerOoutput;
var scoreYouDOMElement: HTMLElement;
var scoreComputerDOMElement: HTMLElement;

const spielStatus: HTMLElement = document.querySelector("#player");
let resetButton: HTMLElement = document.querySelector("#playAgain");
let spielactive: boolean = true;
const playText: HTMLElement = document.getElementById("#playText");



window.addEventListener("load", function (): void {

    spielFeld = document.querySelector("#spielFeld");
    buttonLeicht = document.querySelector("#easy");
    buttonLeicht.addEventListener("click", drawSpielFeldtodomLeicht);
    buttonMittel = document.querySelector("#medium");
    buttonMittel.addEventListener("click", drawSpielFeldtodomMittel);
    buttonSchwer = document.querySelector("#hard");
    buttonSchwer.addEventListener("click", drawSpielFeldtodomSchwer);
    alleSchwierigkeitsstufen = document.querySelector("#schwierigkeit");
    scoreYouDOMElement = document.querySelector("#scoreYou");
    scoreComputerDOMElement = document.querySelector("#scoreComputer");
    resetButton.addEventListener("click", drawSpielFeldtodomLeicht);
});




function drawSpielFeldtodomLeicht(): void {

    spielFeld.innerHTML = "";

    alleSchwierigkeitsstufen.innerHTML = ""; //Buttons verschwinden bei Erscheinen des Spielfelds
    for (let index: number = 0; index < schwierigkeitsstufeLeicht.length; index++) {

        let feld: HTMLElement = document.createElement("div"); //9 Divs werden innerhalb des Divs "SpielFeld" erstellt
        feld.dataset.feldangeklicktindex = index.toString(); //index.toString(); //eigener Wert für jedes Feld, mithilfe von dataset erstellt. Wird als Index benutzt

        spielFeld.classList.add("leicht"); //das Spielfeld erhält die Klasse "leicht", mit den in CSS festgelegten Werten
        spielFeld.appendChild(feld); //dem Spielfeld werden die Divs übergeben

        //Bei click auf ein feld im Gitter, wird die Funktio für das Click Event aufgerufen.
        feld.addEventListener("click", clickOutcomeLeicht);
        currentPlayer = playerOoutput; //Der Anfangsspieler wird auf Spieler O gesetzt

        function clickOutcomeLeicht(e: Event): void {

            let feldangeklicktindex: string = (e.target as HTMLElement).dataset.feldangeklicktindex;

            schwierigkeitsstufeLeicht[feldangeklicktindex].value = currentPlayer;  //Feld kann nicht 2mal gecklickt werden

            //if (!feld[feldangeklicktindex]) {
            if (feld.innerHTML == "" && !feld[feldangeklicktindex]) {
                feld[feldangeklicktindex] = currentPlayer;

                currentPlayer = currentPlayer === playerXoutput ? playerOoutput : playerXoutput; //Ternary -> Ist current Player = player O? Dann wird current Player zu Player X.

                if (currentPlayer == playerXoutput) {
                    feld.innerHTML = "<span class='fas fa-times'></span>";
                    schwierigkeitsstufeLeicht[feldangeklicktindex].clicked = true;

                    console.log("current Player ist " + currentPlayer + " feld: " + feldangeklicktindex);

                    currentPlayer = playerOoutput;


                    setTimeout(computerSpieltLeicht, 300);

                }

            }

            
            

           
            
        }
        
    }

    computerSpieltLeicht();


    
    


}


function computerSpieltLeicht(): void {


    /*if (currentPlayer == playerXoutput) {
        return;
    }
    
    do {
        var random: number = Math.floor(Math.random() * schwierigkeitsstufeLeicht.length);
        if (inhaltFelder.item(random).innerHTML == "" && currentPlayer == playerOoutput) {
            inhaltFelder.item(random).innerHTML = "<span class='far fa-circle'></span>";
            console.log("current Player ist: " + currentPlayer);
            currentPlayer = playerXoutput;
        } else if (inhaltFelder.item(random).innerHTML !== "") {
            inhaltFelder.item(random).innerHTML = "<span class='far fa-circle'></span";
        } 
           
        
    } while (currentPlayer == playerOoutput);
        
    */
    /*if (currentPlayer == playerXoutput) {
        return;
    }

    let inhaltFelder: HTMLCollection = spielFeld.children;
    var otherrandom: number = Math.floor(Math.random() * schwierigkeitsstufeLeicht.length);
    var random: number = Math.floor(Math.random() * schwierigkeitsstufeLeicht.length);
    if (currentPlayer == playerOoutput && inhaltFelder.item(random).innerHTML == "") {
        inhaltFelder.item(random).innerHTML = "<span class='far fa-circle'></span";

    } else if (inhaltFelder.item(random).innerHTML !== "") {
        console.log("Feld ist besetzt");
        
    }
    */

    while (currentPlayer == playerOoutput) {
        var random: number = Math.floor(Math.random() * schwierigkeitsstufeLeicht.length);
        var otherrandom: number = Math.floor(Math.random() * schwierigkeitsstufeLeicht.length);
        let inhaltFelder: Feld = schwierigkeitsstufeLeicht[random][otherrandom];
        if (inhaltFelder.value == "") {
            return;
        }
        
    }
}

//(inhaltFelder.item(random).innerHTML !== "")



/*function tie(): void {
    var clicked: Feld = spielFeld.innerHTML;
    if (clicked.value != "") {
        window.alert("It`s a tie");
    }
    
}
*/



function updatecounterYou(): void {
    scoreYouDOMElement.innerHTML = schwierigkeitsstufeLeicht.length + "Points";
}

function updatecounterCom(): void {
    scoreComputerDOMElement.innerHTML = schwierigkeitsstufeLeicht.length + "Points";
}


function drawSpielFeldtodomMittel(): void {

    spielFeld.innerHTML = "";
    alleSchwierigkeitsstufen.innerHTML = ""; //visibility, is-hidden,  
    for (let index: number = 0; index < schwierigkeitsstufeMittel.length; index++) {
        let feld: HTMLElement = document.createElement("div");

        spielFeld.classList.add("mittel");
        spielFeld.appendChild(feld);

        const clickOutcomeMittel = (e) => {
            const i: number = e.target.i;
            console.log(e.target);
            if (!feld[i]) {
                feld[i] = currentPlayer;
                e.target.innerText = currentPlayer;

                currentPlayer = currentPlayer === playerOoutput ? playerXoutput : playerOoutput;
            }
            //wechselt zwischen X und O
            if (currentPlayer == playerOoutput) {

                feld.innerHTML = "<span class='fas fa-times'></span>";
                console.log("player X played");

            } else {

                feld.innerHTML = "<span class='far fa-circle'></span>";
                console.log("player O played");
            }
        };
        feld.addEventListener("click", clickOutcomeMittel);


    }


}


function drawSpielFeldtodomSchwer(): void {

    spielFeld.innerHTML = "";

    alleSchwierigkeitsstufen.innerHTML = "";
    for (let index: number = 0; index < schwierigkeitsstufeSchwer.length; index++) {

        let feld: HTMLElement = document.createElement("div");
        spielFeld.classList.add("schwer");
        spielFeld.appendChild(feld);

        const clickOutcomeSchwer = (e) => {
            const i: number = e.target.i;
            console.log(i);
            if (!feld[i]) {
                feld[i] = currentPlayer;
                e.target.innerText = currentPlayer;
                currentPlayer = currentPlayer === playerOoutput ? playerXoutput : playerOoutput;
            }

            //wechselt zwischen X und O, wenn der currentPlayer X ist und gesetzt hat, wird er zu player O
            if (currentPlayer == playerOoutput) {
                feld.innerHTML = "<span class='fas fa-times'></span>";
            } else {

                feld.innerHTML = "<span class='far fa-circle'></span>";
            }
        };
        feld.addEventListener("click", clickOutcomeSchwer);


    }
}




function Reset(): void {
    console.log("restart!");

    //drawSpielfeldtoDom...


}



//alle Gewinnmöglichkeiten
let winsLeicht = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

let winsMittel = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
];








