window.addEventListener("load", function () {
    //Variablen
    var eingabe = document.getElementById("inputText");
    var tasksNumber = 0;
    //"Enter"
    eingabe.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            eingabe.value = "";
        }
    });
    //Task löschen Funktion
    function deleteTask(div) {
        div.remove();
        tasksNumber--;
        tasksAnzahl();
    }
    //addTask Funkion
    function addTask() {
        //Elemente erstellen
        var div = document.createElement("div");
        div.className = "toDoItem";
        //checkbox, um Tasks abzuhaken
        var checked = document.createElement("input");
        checked.type = "checkbox";
        checked.className = "checkBox";
        var taskUebernehmen = document.createElement("label");
        taskUebernehmen.innerHTML = eingabe.value;
        taskUebernehmen.className = "taskText"; //label
        var trash = document.createElement("i");
        trash.className = "far fa-trash-alt"; //trash icon
        //dem Div Element die Buttons zuweisen
        document.getElementById("toDoList").appendChild(div);
        div.appendChild(checked);
        div.appendChild(taskUebernehmen);
        div.appendChild(trash);
        //trash Button 
        trash.addEventListener("click", function (event) {
            console.log(event);
            deleteTask(div);
            console.log("ich wurde gelöscht");
        });
        tasksNumber++;
        tasksAnzahl();
    }
    //Zähler Funktion
    function tasksAnzahl() {
        document.getElementById("counter").innerText = tasksNumber + " ToDo´s zu erledigen";
    }
});
//# sourceMappingURL=to-do.js.map