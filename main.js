var count = 0;
if (localStorage.getItem("count") != null) {
    count = localStorage.getItem("count");
} else {
    localStorage.setItem("count", count);
}

var dragarea = document.querySelector(".tasks-list-ul");
new Sortable(dragarea, {
    animation: 350
});

function addNewElement() {
    var input = document.getElementById("input field").value;

    if (input.length > 0) {
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

        var allTasks = document.getElementsByClassName("close");
        for (var i = 0; i < allTasks.length; i++) {
            allTasks[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        var list = document.querySelector("#tasks-list-ul");
        list.addEventListener("click", function (ev) {
            ev.target.classList.toggle("checked");

        });

        window.addEventListener('ArrowDown', function (event) {
            var li = this.document.querySelector(".tasks-list-li");
            li.classList.toggle("checked");
            console.log(event);
        });

        count++;
        localStorage.setItem("count", count);
    }
    else {
        alert("Enter some task");
    }
}

function onSave() {
    var allTasks = [...document.querySelectorAll(".tasks-list-li")];
    console.log(allTasks);
    allTasks.forEach((task) => {
        var task = {
            "text": task.innerText,
            "isDone": (task.classList.contains("checked")) ? true : false,
        }
        localStorage.setItem("task" + count, JSON.stringify(task));
    });
}

function onLoad() {

}
