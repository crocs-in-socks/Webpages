let fullList = document.querySelector('ul')
fullList.addEventListener('click', clickedTask);

function clickedTask(ev)
{
    if(ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');
        // let text = ev.target.;
        console.log(text);
    }
    else if(ev.target.tagName === 'SPAN')
        addTask(ev);
    else if(ev.target.className === 'taskText')
        addEventListener('keypress', entered);
}

function entered(ev)
{
    if(ev.key == 'Enter')
    {
        let inputField = ev.target;
        let textNode = document.createElement("div");
        textNode.setAttribute("class", "taskText");
        textNode.innerHTML = inputField.value;
        inputField.parentElement.replaceChild(textNode, inputField);
    }
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