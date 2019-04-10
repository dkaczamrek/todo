var newTaskContent;
var buttonAddTask = document.getElementById('add-task');


//do wyjabania
var tastListEmpyInfo = document.getElementById('tast-list-empty');

var newTask;
var insertTask;

buttonAddTask.addEventListener('click', captureTaskContent);

function captureTaskContent(){
    newTaskContent = document.getElementById('new-task-content').value;
    if (newTaskContent) {
        newTask = document.createElement('li');
        newTask.className = 'task';
        newTask.innerHTML = newTaskContent;
        document.getElementById('task-list').appendChild(newTask);
        newTaskContent = document.getElementById('new-task-content').value = "";
        //do wyjabania
        tastListEmpyInfo.style.display = 'none';
    }
}