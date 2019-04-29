var log = console.log,
    addButton = document.getElementById('add-task'),
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
        crossed: false,
        index: taskList.length + 1,
        sorting: taskList.length + 1
    });

    document.getElementById('new-task-content').value = '';
    document.getElementById('new-task-content').classList.remove('required');

    renderList();
}

function renderList() {
    saveList(taskList);

    switch (sortType) {
        case 'sortDefault':
            taskList.sort(function (a, b) {
                if (a.index > b.index) {
                    return 1;
                }

                if (a.index < b.index) {
                    return -1;
                }

                return 0;
            });
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
            taskList.sort(function (a, b) {
                if (a.sorting > b.sorting) {
                    return 1;
                }

                if (a.sorting < b.sorting) {
                    return -1;
                }

                return 0;
            });
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

        if (taskList[i].crossed) {
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
        
        var sortUp = document.createElement('button');
        var sortDown = document.createElement('button');

        sortUp.className = 'sort-up';
        sortDown.className = 'sort-down';

        sortUp.innerHTML = '▲';
        sortDown.innerHTML = '▼';

        createTask.appendChild(sortUp); 
        createTask.appendChild(sortDown); 
    }
}

addButton.addEventListener('click' || '' , captureContent);

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

        if (sortType === "sortManual") {
            list.classList.add('sorting');
        } else {
            list.classList.remove('sorting');
        }

        renderList();
    }

    if (e.target.matches('button.sort-up')) {
        i = e.target.parentNode.getAttribute('data-index');
        // var x = e.target.parentNode.previousSibling;
        var diminish = taskList[i].sorting - 1;
        var augument = taskList[i - 1].sorting + 1;

        taskList[i].sorting = diminish;
        taskList[i - 1].sorting = augument;

        renderList();
    }

    if (e.target.matches('button.sort-down')) {
        i = e.target.parentNode.getAttribute('data-index');
        var integer = i;
        integer++;

        var diminish = taskList[i].sorting + 1;
        var augument = taskList[integer].sorting - 1;

        taskList[i].sorting = diminish;
        taskList[integer].sorting = augument;

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