
window.addEventListener("load", function (): void {

    var klaenge: string[] = ["Material/hihat.mp3", "Material/kick.mp3", "Material/snare.mp3", "Material/snare.mp3", "Material/kick.mp3"];

    var playButton: HTMLElement = document.getElementById("play");
    var pauseButton: HTMLElement = document.getElementById("pause");
    var deleteButton: HTMLElement = document.getElementById("delete");
    var remixButton: HTMLElement = document.getElementById("remix");

    var interval: number;

    var i: number = 0;

    

    

    playButton.addEventListener("click", function (): void {
        playPause(playButton, pauseButton);

    });

    pauseButton.addEventListener("click", function (): void {
        playPause(pauseButton, playButton);

    });

    function playPause(play: HTMLElement, pause: HTMLElement): void {
        play.classList.add("is-hidden");
        pause.classList.remove("is-hidden");
    }

    deleteButton.addEventListener("click", function (): void {
        klaenge.length = 0;

    });

    var sounds: string[] = ["Material/A.mp3", "Material/C.mp3", "Material/F.mp3", "Material/G.mp3", "Material/hihat.mp3", "Material/kick.mp3", "Material/laugh-1.mp3", "Material/laugh-2.mp3", "Material/snare.mp3"];

    remixButton.addEventListener("click", function (): void {
        clearInterval(interval);
        for (let i: number = 0; i <= 4; i++) {
            var eineZahl: number = Math.floor(Math.random() * 9); 
            klaenge[i] = (sounds[eineZahl]);


        }

        interval = setInterval(function (): void {
            abspielen(klaenge[i]);

            i = i + 1;

            if (i == klaenge.length) {
                i = 0;



                document.querySelector("#pause").addEventListener("click", function (): void {
                    clearInterval(interval);
                }); 
            }
        }, 500);
    });



    document.querySelector("#sound1").addEventListener("click", function (): void { abspielen("Material/A.mp3"); });
    document.querySelector("#sound2").addEventListener("click", function (): void { abspielen("Material/C.mp3"); });
    document.querySelector("#sound3").addEventListener("click", function (): void { abspielen("Material/F.mp3"); });
    document.querySelector("#sound4").addEventListener("click", function (): void { abspielen("Material/G.mp3"); });
    document.querySelector("#sound5").addEventListener("click", function (): void { abspielen("Material/hihat.mp3"); });
    document.querySelector("#sound6").addEventListener("click", function (): void { abspielen("Material/kick.mp3"); });
    document.querySelector("#sound7").addEventListener("click", function (): void { abspielen("Material/laugh-1.mp3"); });
    document.querySelector("#sound8").addEventListener("click", function (): void { abspielen("Material/laugh-2.mp3"); });
    document.querySelector("#sound9").addEventListener("click", function (): void { abspielen("Material/snare.mp3"); });

    
    //Play Button spielt Beat ab, Pause Button stoppt Beat

    function abspielen(sounds: string): void {
        var sound: HTMLAudioElement = new Audio(sounds); sound.play();
    }
    
    


    document.querySelector("#pause").addEventListener("click", function (): void {
        clearInterval(interval);
    });

    document.querySelector("#play").addEventListener("click", function (): void {

        interval = setInterval(function (): void {
            abspielen(klaenge[i]);

            i = i + 1;

            if (i == 4) {
                i = 0;



               
            }
        }, 500);
    });

});