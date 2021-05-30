window.addEventListener("load", function () {
    document.querySelector("#sound1").addEventListener("click", function () { abspielen("Material/A.mp3"); });
    document.querySelector("#sound2").addEventListener("click", function () { abspielen("Material/C.mp3"); });
    document.querySelector("#sound3").addEventListener("click", function () { abspielen("Material/F.mp3"); });
    document.querySelector("#sound4").addEventListener("click", function () { abspielen("Material/G.mp3"); });
    document.querySelector("#sound5").addEventListener("click", function () { abspielen("Material/hihat.mp3"); });
    document.querySelector("#sound6").addEventListener("click", function () { abspielen("Material/kick.mp3"); });
    document.querySelector("#sound7").addEventListener("click", function () { abspielen("Material/laugh-1.mp3"); });
    document.querySelector("#sound8").addEventListener("click", function () { abspielen("Material/laugh-2.mp3"); });
    document.querySelector("#sound9").addEventListener("click", function () { abspielen("Material/snare.mp3"); });
    function abspielen(sounds) {
        var sound = new Audio(sounds);
        sound.play();
    }
    //Aufgabe 7.2
    document.querySelector("#play").addEventListener("click", function () { playbutton(); });
    function playbutton() {
        var klaenge = ["Material/hihat.mp3", "Material/kick.mp3", "Material/snare.mp3", "Material/snare.mp3", "Material/kick.mp3"];
        var indexZaehler = 0;
        var interval = setInterval(function () {
            var beat = new Audio(klaenge[indexZaehler]);
            beat.play();
            indexZaehler = indexZaehler + 1;
            if (indexZaehler == klaenge.length) {
                indexZaehler = 0;
            }
        }, 400);
    }
});
//# sourceMappingURL=Drumpad1.js.map