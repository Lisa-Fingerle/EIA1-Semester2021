window.addEventListener("load", function (): void {



    //Variablen
    let eingabe: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);
    let tasksNumber: number = 0;



    //"Enter"
    eingabe.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            addTask();
            eingabe.value = "";
        }
    });





    //Task löschen Funktion
    function deleteTask(div: HTMLDivElement): void {
        div.remove();

        tasksNumber--;
        tasksAnzahl();
    }






    //addTask Funkion
    function addTask(): void {

        //Elemente erstellen
        let div: HTMLDivElement = document.createElement("div");
        div.className = "toDoItem";

        //checkbox, um Tasks abzuhaken
        let checked: HTMLInputElement = document.createElement("input");
        checked.type = "checkbox";
        checked.className = "checkBox";

        let taskUebernehmen: HTMLLabelElement = document.createElement("label");
        taskUebernehmen.innerHTML = eingabe.value;
        taskUebernehmen.className = "taskText"; //label

        let trash: HTMLElement = document.createElement("i");
        trash.className = "far fa-trash-alt"; //trash icon

        //dem Div Element die Buttons zuweisen
        document.getElementById("toDoList").appendChild(div);
        div.appendChild(checked);
        div.appendChild(taskUebernehmen);
        div.appendChild(trash);

        //trash Button 
        trash.addEventListener("click", function (event: MouseEvent): void {
            console.log(event);
            deleteTask(div);
            console.log("ich wurde gelöscht");
        });

        tasksNumber++;
        tasksAnzahl();
    }


    //Zähler Funktion
    function tasksAnzahl(): void {
        document.getElementById("counter").innerText = tasksNumber + " ToDo´s zu erledigen";
    }







});






