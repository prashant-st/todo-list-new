var allTasks = document.getElementsByClassName("close");

function addNewElement() {
    var input = document.getElementById("input field").value;

    var li = document.createElement("li");
    var txt = document.createTextNode(input);
    li.appendChild(txt);

    var i = document.createElement("i");
    var icon = document.createTextNode("\u2715");

    i.className = "close";
    i.appendChild(icon);

    li.appendChild(i);
    li.className = "tasks-list-li";

    var ul = document.getElementById("tasks-list-ul");
    ul.appendChild(li);

    document.getElementById("input field").value = "";

    for (var i = 0; i < allTasks.length; i++) {
        allTasks[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
