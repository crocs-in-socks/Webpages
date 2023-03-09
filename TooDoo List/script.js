let taskList = document.getElementsByClassName('taskCard');
let completedTaskList = document.getElementsByClassName('checked');

let fullList = document.querySelector('ul')
fullList.addEventListener('click', clickedTask);

function clickedTask(ev)
{
    if(ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');
    }
    else if(ev.target.tagName === 'SPAN')
        addTask(ev);
}

function addTask(ev)
{
    let currentTask = ev.target.parentElement;

    let newTask = document.createElement("li");
    newTask.setAttribute("class", "taskCard");

    let newCheckBox = document.createElement("div");
    newCheckBox.setAttribute("class", "checkBox")
    newCheckBox.innerHTML = "";

    let newTextInput = document.createElement("input");
    newTextInput.setAttribute("type", "text");
    newTextInput.setAttribute("class", "taskText");
    newTextInput.setAttribute("placeholder", "Enter task here");

    let newBtn = document.createElement("span");
    newBtn.setAttribute("class", "addTask");
    newBtn.innerHTML = "&plus;";

    newTask.appendChild(newCheckBox);
    newTask.appendChild(newTextInput);
    newTask.appendChild(newBtn)

    currentTask.parentElement.insertBefore(newTask, currentTask);
}