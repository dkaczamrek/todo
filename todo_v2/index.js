var addButton = document.getElementById('add-task'),
list = document.getElementById('task-list'),
info = document.getElementById('tast-list-empty'),
sort = document.getElementById('sort');

sort.setAttribute('disabled', 'disabled');

var taskList = [];

function captureContent() {
    var taskContent = document.getElementById('new-task-content').value;

    if (!taskContent) {
        document.getElementById('new-task-content').classList.add('required');
        return;
    }
    
    taskList.push({
        text: taskContent,
        crossed: false
    });
    document.getElementById('new-task-content').value = '';
    document.getElementById('new-task-content').classList.remove('required');
    renderList();
}

function renderList() {
    if (taskList.length) {
        info.style.display = 'none';
        sort.removeAttribute('disabled');
    } else {
        info.style.display = 'block';
        sort.setAttribute('disabled', 'disabled');
    }

    list.innerHTML = " ";

    for (var i = 0; i < taskList.length; i++) {
        var createTask = document.createElement('li');
        createTask.className = 'task';

        createTask.setAttribute('data-index', i);

        if (taskList[i].crossed === true) {
            createTask.classList.add('crossed');
        } else {
            createTask.classList.remove('crossed');
        }
        createTask.innerHTML = taskList[i].text;
        list.appendChild(createTask);
        
        
        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerHTML = 'x';
        createTask.appendChild(deleteButton);
    }

}

addButton.addEventListener('click', captureContent);

document.addEventListener('click', function (e){

    if (e.target.matches('li.task')) {
        i = e.target.getAttribute('data-index');
        console.log(i);

        if (taskList[i].crossed === true) {
            taskList[i].crossed = false;
        } else {
            taskList[i].crossed = true;
        }
    };

    if (e.target.matches('button.delete')) {
        i = e.target.parentNode.getAttribute('data-index');
        taskList.splice(i, 1);

    }

    renderList();
});

console.log();