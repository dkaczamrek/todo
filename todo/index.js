var newTaskContent;
var buttonAddTask = document.getElementById('add-task');

var taskStriker;
var tastListEmpyInfo = document.getElementById('tast-list-empty');

var newTask;

buttonAddTask.addEventListener('click', captureTaskContent);

function captureTaskContent(){
    newTaskContent = document.getElementById('new-task-content').value;
    if (newTaskContent) {
        newTask = document.createElement('li');
        removeButton = document.createElement('button');
        newTask.addEventListener('click', function(){
            this.style.textDecoration = "line-through";
        });

        newTask.className = 'task';
        newTask.innerHTML = newTaskContent;
        removeButton.innerHTML = 'usuń';

        document.getElementById('task-list').appendChild(newTask);
        newTask.appendChild(removeButton);

        newTaskContent = document.getElementById('new-task-content').value = "";
    }
}

buttonAddTask.addEventListener('click', taskCounter);

function taskCounter(){
    var taskCount = document.getElementsByTagName('li').length;
    if (taskCount > 0) {
        tastListEmpyInfo.style.display = 'none';
    }
}