


window.addEventListener("load", function (): void {

    document.querySelector("#sound1").addEventListener("click", function (): void { abspielen("Material/A.mp3"); });
    document.querySelector("#sound2").addEventListener("click", function (): void { abspielen("Material/C.mp3"); });
    document.querySelector("#sound3").addEventListener("click", function (): void { abspielen("Material/F.mp3"); });
    document.querySelector("#sound4").addEventListener("click", function (): void { abspielen("Material/G.mp3"); });
    document.querySelector("#sound5").addEventListener("click", function (): void { abspielen("Material/hihat.mp3"); });
    document.querySelector("#sound6").addEventListener("click", function (): void { abspielen("Material/kick.mp3"); });
    document.querySelector("#sound7").addEventListener("click", function (): void { abspielen("Material/laugh-1.mp3"); });
    document.querySelector("#sound8").addEventListener("click", function (): void { abspielen("Material/laugh-2.mp3"); });
    document.querySelector("#sound9").addEventListener("click", function (): void { abspielen("Material/snare.mp3"); });


    function abspielen(sounds: string): void {
        var sound: HTMLAudioElement = new Audio(sounds); sound.play();
    }

    //Aufgabe 7.2


    document.querySelector("#play").addEventListener("click", function (): void { playbutton(); });

    function playbutton(): void {
        var klaenge: string[] = ["Material/hihat.mp3", "Material/kick.mp3", "Material/snare.mp3", "Material/snare.mp3", "Material/kick.mp3"];
        var indexZaehler: number = 0;
        var interval: number = setInterval(function (): void {
            var beat = new Audio(klaenge[indexZaehler]);
            beat.play();
            indexZaehler = indexZaehler + 1;
            if (indexZaehler == klaenge.length) {
                indexZaehler = 0;
            }

        },                                 400);




    }

});
