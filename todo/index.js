var newTaskContent = document.getElementById('new-task-content').value;
var buttonAddTask = document.getElementById('add-task');

console.log(newTaskContent);


buttonAddTask.addEventListener('click', captureTaskContent);

function captureTaskContent(){
    console.log(newTaskContent);
}
