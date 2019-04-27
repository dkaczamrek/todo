var addButton = document.getElementById('add-task'),
    list = document.getElementById('task-list'),
    info = document.getElementById('tast-list-empty'),
    sort = document.getElementById('sort'),
    sortType;


sort.setAttribute('disabled', 'disabled');

var taskList = loadList() || [];
renderList();

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
    saveList(taskList);


    switch (sortType) {
        case 'sortDefault':
            console.log('domyślnie');
            break;
        case 'sortAZ':
            taskList.sort(function (a, b) {
                if (a.text > b.text) {
                    return 1;
                }

                if (a.text < b.text) {
                    return -1;
                }

                return 0;
            });
            break;
        case 'sortZA':
            taskList.sort(function (a, b) {
                if (a.text < b.text) {
                    return 1;
                }

                if (a.text > b.text) {
                    return -1;
                }

                return 0;
            });
            break;
        case 'sortManual':
            console.log('ręcznie');
            break;
    }


    

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

        if (taskList[i].crossed) {
            taskList[i].crossed = false;
        } else {
            taskList[i].crossed = true;
        }
    
        renderList();
    };

    if (e.target.matches('button.delete')) {
        i = e.target.parentNode.getAttribute('data-index');
        taskList.splice(i, 1);

        renderList();
    }

    if (e.target.matches('#sort')) {
        sortType = sort.value;

        renderList();
    }
});





function loadList() {
    try {
        return JSON.parse(localStorage.getItem('list'));
    } catch (e) {
        return [];
    }
}

function saveList(list) {
    localStorage.setItem('list', JSON.stringify(list));
}