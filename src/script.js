document.addEventListener('DOMContentLoaded', () => {
    //Dark Mode Elements
    const modeSwitch = document.getElementById('modeSwitch');
    const rootStyle = document.documentElement.style;

    //ToDo List Elements
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //Local Storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; //Task Storage
    const idKeys = JSON.parse(localStorage.getItem('idKeys')) || []; //idKey Storage
    const darkModeOn = JSON.parse(localStorage.getItem(''))
  
    //Dark Mode
    modeSwitch.addEventListener('change', () => {
        document.body.classList.toggle(modeSwitch.checked);
        //document.body.classList.toggle('dark-mode', modeSwitch.checked);
    
        if (modeSwitch.checked) {
            rootStyle.setProperty('--background', '#000');
            rootStyle.setProperty('--text', '#fff');
            rootStyle.setProperty('--switch-off', '#000');
            rootStyle.setProperty('--switch-on', '#fff');
        } else {
            rootStyle.setProperty('--background', '#fff');
            rootStyle.setProperty('--text', '#000');
            rootStyle.setProperty('--switch-off', '#fff');
            rootStyle.setProperty('--switch-on', '#000');
        }
    });

    //ToDo List
    //Render Tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="banner">
                <label for="${task.idKey}">
                <input id="${task.idKey}" type="checkbox" class="task-list-checkbox" ${task.completed ? 'checked' : ''}>
                <span ${task.completed ? 'class="crossed-out"' : ''}>${task.text}</span>
                <br>
                <button data-index="${index}">Remove</button>
                </label>
                </div>
            `;
            taskList.appendChild(li)
        });
        updateLocalStorage();
    }

    //Add New Task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = taskInput.value.trim();
        if (text !== '') {
            tasks.push({text, completed: false, idKey: newUniqueId()});
            renderTasks();
            taskInput.value = '';
        }
    });

    //Remove Task
    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = parseInt(e.target.dataset.index);
            tasks.splice(index, 1);
            renderTasks();
        }
    });

    // Toggle Task Completion
    taskList.addEventListener('change', (e) => {
        if (e.target.tagName === 'INPUT') {
            const index = parseInt(e.target.parentElement.querySelector('button').dataset.index);
            tasks[index].completed = e.target.checked;
            renderTasks();
        }
    });

    // Create Unique ID
    function newUniqueId() {
        while (true) {
            const id = Math.random() * 10000;
            if (idKeys.includes(id)) {
                continue;
            } else {
                return id;
            }
        }
    }

    // Update Local Storage
    function updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Initialise Rendering
    renderTasks();

});