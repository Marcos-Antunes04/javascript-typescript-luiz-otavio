let inputTask = document.querySelector('#task-input');
let ulTasks = document.querySelector('#ul-tasks');
let divTasks = document.querySelector('.div-tasks');

inputTask.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        addTask()
    }
})

function createTask(taskName) {
    let li = document.createElement('li');
    li.setAttribute('class', 'li-task');
    li.innerText = taskName;

    let newDiv = createDiv();
    newDiv.appendChild(li);

    const buttons = createButtons();
    newDiv.appendChild(buttons);
    
    divTasks.appendChild(newDiv);
}

function clearInputTask() {
    inputTask.value = '';
    inputTask.focus();
}

function createDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'div-task');

    return div;
}

function createButtons() {
    const divButton = document.createElement('div');

    const checkButton = document.createElement('button');
    checkButton.innerHTML += '<i class="fa-solid fa-check style="color:white;"></i>';
    checkButton.setAttribute('class', 'check-button');
    checkButton.setAttribute('title', 'Concluir tarefa');
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color:white;"></i>';
    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.setAttribute('title', 'Apagar tarefa');

    divButton.appendChild(checkButton);
    divButton.appendChild(deleteButton);

    return divButton;
}

function saveTasks() {
    const allDivTasks = ulTasks.querySelectorAll('li.li-task');
    let tasksList = [];

    for (let task of allDivTasks) {
        taskText = task.innerHTML;
        tasksList.push(taskText);
    }

    const tasksListJson = JSON.stringify(tasksList);
    localStorage.setItem('tasks', tasksListJson)
}

function renderSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const tasksList = JSON.parse(tasks)

    for (let task of tasksList) {
        createTask(task);
    }
}

renderSavedTasks();

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('check-button')) {
        if(el.parentElement.parentElement.classList.contains('checked')) {
            el.parentElement.parentElement.classList.remove('checked');
        } else {
            el.parentElement.parentElement.classList.add('checked');
        }
    }

    if(el.classList.contains('delete-button')) {
        el.parentElement.parentElement.remove();
        saveTasks();
    }
})

function addTask() {
    if(!inputTask.value) return;

    createTask(inputTask.value);

    clearInputTask();
    saveTasks();
}