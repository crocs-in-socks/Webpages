let fullList = document.querySelector('ul')
fullList.addEventListener('click', clickedTask);

function clickedTask(ev)
{
    if(ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');
        let checkmark = ev.target.getElementsByTagName('div')[0];
        checkmark.classList.toggle('checkMark')
    }
    else if(ev.target.tagName === 'DIV')
    {
        ev.target.parentElement.classList.toggle('checked');
        let checkmark = ev.target.parentElement.getElementsByTagName('div')[0];
        checkmark.classList.toggle('checkMark')
    }
    else if(ev.target.className === 'addTask')
        addTask(ev);
    else if(ev.target.className === 'delTask')
        delTask(ev);
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

function delTask(ev)
{
    let task = ev.target.parentElement;
    let taskList = task.parentElement;
    if(taskList.children.length > 1)
    {
        task.style.animation = "closeUp 500ms";
        setTimeout(()=>{
            task.remove();
        }, 450);
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
    newTextInput.setAttribute("placeholder", "Enter a task here");

    let newAddBtn = document.createElement("span");
    newAddBtn.setAttribute("class", "addTask");
    newAddBtn.innerHTML = "&plus;";

    let newDelBtn = document.createElement("span");
    newDelBtn.setAttribute("class", "delTask");
    newDelBtn.innerHTML = "&times;"
    
    newTask.appendChild(newCheckBox);
    newTask.appendChild(newTextInput);
    newTask.appendChild(newAddBtn);
    newTask.appendChild(newDelBtn);

    currentTask.insertAdjacentHTML('afterend', newTask.outerHTML); // Appends the new task right after the task that was clicked on
    console.log(newTask);
}