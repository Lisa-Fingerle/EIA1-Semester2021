window.addEventListener("load", function () {
    var klaenge = ["Material/hihat.mp3", "Material/kick.mp3", "Material/snare.mp3", "Material/snare.mp3", "Material/kick.mp3"];
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var deleteButton = document.getElementById("delete");
    var remixButton = document.getElementById("remix");
    var interval;
    var i = 0;
    playButton.addEventListener("click", function () {
        playPause(playButton, pauseButton);
    });
    pauseButton.addEventListener("click", function () {
        playPause(pauseButton, playButton);
    });
    function playPause(play, pause) {
        play.classList.add("is-hidden");
        pause.classList.remove("is-hidden");
    }
    deleteButton.addEventListener("click", function () {
        klaenge.length = 0;
    });
    var sounds = ["Material/A.mp3", "Material/C.mp3", "Material/F.mp3", "Material/G.mp3", "Material/hihat.mp3", "Material/kick.mp3", "Material/laugh-1.mp3", "Material/laugh-2.mp3", "Material/snare.mp3"];
    remixButton.addEventListener("click", function () {
        clearInterval(interval);
        for (var i_1 = 0; i_1 <= 4; i_1++) {
            var eineZahl = Math.floor(Math.random() * 8); //Math.random generiert eine random Zahl von 0-9, aber ohne Zusammenhang zu den Sounds
            klaenge[i_1] = (sounds[eineZahl]);
        }
        interval = setInterval(function () {
            abspielen(klaenge[i]);
            i = i + 1;
            if (i == klaenge.length) {
                i = 0;
                document.querySelector("#pause").addEventListener("click", function () {
                    clearInterval(interval);
                });
            }
        }, 500);
    });
    document.querySelector("#sound1").addEventListener("click", function () { abspielen("Material/A.mp3"); });
    document.querySelector("#sound2").addEventListener("click", function () { abspielen("Material/C.mp3"); });
    document.querySelector("#sound3").addEventListener("click", function () { abspielen("Material/F.mp3"); });
    document.querySelector("#sound4").addEventListener("click", function () { abspielen("Material/G.mp3"); });
    document.querySelector("#sound5").addEventListener("click", function () { abspielen("Material/hihat.mp3"); });
    document.querySelector("#sound6").addEventListener("click", function () { abspielen("Material/kick.mp3"); });
    document.querySelector("#sound7").addEventListener("click", function () { abspielen("Material/laugh-1.mp3"); });
    document.querySelector("#sound8").addEventListener("click", function () { abspielen("Material/laugh-2.mp3"); });
    document.querySelector("#sound9").addEventListener("click", function () { abspielen("Material/snare.mp3"); });
    //Play Button spielt Beat ab, Pause Button stoppt Beat
    function abspielen(sounds) {
        var sound = new Audio(sounds);
        sound.play();
    }
    document.querySelector("#pause").addEventListener("click", function () {
        clearInterval(interval);
    });
    document.querySelector("#play").addEventListener("click", function () {
        interval = setInterval(function () {
            abspielen(klaenge[i]);
            i = i + 1;
            if (i == 4) {
                i = 0;
            }
        }, 500);
    });
});
//# sourceMappingURL=Drumpad2.js.map