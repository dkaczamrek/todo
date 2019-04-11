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
        newTask.className = 'task';
        newTask.innerHTML = newTaskContent;
        document.getElementById('task-list').appendChild(newTask);
        newTaskContent = document.getElementById('new-task-content').value = "";
    }
}

buttonAddTask.addEventListener('click', taskCounter);

function taskCounter(){
    var taskCount = document.getElementsByTagName('li').length;
    if (taskCount > 0) {
        
        tastListEmpyInfo.style.display = 'none';
        taskStriker = document.getElementsByTagName('li')[0];
        console.log(taskStriker);
        taskStriker.addEventListener('click', strikeThrough);
    }
}

function strikeThrough(){
    document.getElementsByTagName('li')[0].style.textDecoration = "line-through";
}