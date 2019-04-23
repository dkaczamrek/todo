var addButton = document.getElementById('add-task'),
list = document.getElementById('task-list');
info = document.getElementById('tast-list-empty');

var taskList = [];

function captureContent() {
    var taskContent = document.getElementById('new-task-content').value;

    if (!taskContent) {
        return;
    }
    
    taskList.push({
        text: taskContent,
        crossed: false
    });
    document.getElementById('new-task-content').value = '';

    renderList();
}

function renderList() {
    if (taskList.length) {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
    }

    list.innerHTML = " ";

    for (var i = 0; i < taskList.length; i++) {
        var createTask = document.createElement('li');
        createTask.className = 'task-'+i;

        if (taskList[i].crossed == true) {
            createTask.classList.add('crossed');
        }
        createTask.innerHTML = taskList[i].text;
        list.appendChild(createTask);
        
        
        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerHTML = 'usuń';
        createTask.appendChild(deleteButton);
    }

}

addButton.addEventListener('click', captureContent);

document.addEventListener('click', function (e){
    if (e.target.matches('li[class^=task-]')) {
        i = e.target.className.split(' ')[0];
        i = i.split('-')[1];

        if (taskList[i].crossed === true) {
            taskList[i].crossed = false;
        } else {
            taskList[i].crossed = true;
        }
    };

    renderList();
});

console.log();