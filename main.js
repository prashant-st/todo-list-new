// localStorage.setItem("tasks", JSON.stringify([["key1", "value1"], ["key2", "value2"]]));

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
        li.className = "tasks-list-li";
        var txt = document.createTextNode(input);
        li.appendChild(txt);
        console.log(li);

        var i = document.createElement("i");
        var icon = document.createTextNode("\u2715");

        i.className = "close";
        i.appendChild(icon);

        li.appendChild(i);

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
    allTasks.forEach((task, index) => {
        var task = {
            "text": task.innerText,
            "isDone": (task.classList.contains("checked")) ? true : false,
        }
        localStorage.setItem("task" + (index + 1), JSON.stringify(task));
    });
}

function onLoad() {
    var ul = document.getElementById("tasks-list-ul");
    console.log(count);
    for (var j = 1; j <= count; j++) {
        console.log("i:" + count);
        if (localStorage.getItem("task" + j) != null) {
            var task = JSON.parse(localStorage.getItem("task" + j));
            var li = document.createElement("li");
            li.className = "tasks-list-li";
            if (task['isDone']) {
                li.className = 'checked';
            }

            var textNode = document.createTextNode(task['text'].slice(0, task['text'].length - 1));

            li.appendChild(textNode);

            var i = document.createElement("i");
            var icon = document.createTextNode("\u2715");

            i.className = "close";
            i.appendChild(icon);

            li.appendChild(i);

            ul.appendChild(li);

            var allTasks = document.getElementsByClassName("close");
            for (var i = 0; i < allTasks.length; i++) {
                allTasks[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }

            var list = document.querySelector("#tasks-list-ul");
            list.addEventListener("click", function (ev) {
                console.log("clicked");
                ev.target.classList.toggle("checked");
            });
        }
    }
}
