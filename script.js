const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        showMessage("Please enter a task.", "red");
        return;
    }

    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => editTask(taskSpan));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTask(li));

    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
    showMessage("Todo item Created Successfully.", "green");
}

function showMessage(text, color) {
    message.innerText = text;
    message.style.color = color;
    setTimeout(() => {
        message.innerText = "";
    }, 2000);
}

function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
    showMessage("Todo item Deleted Successfully.", "red");
}

function editTask(taskSpan) {
    const newTask = prompt("Edit your task:", taskSpan.innerText);
    if (newTask !== null) {
        taskSpan.innerText = newTask;
        showMessage("Todo item Edited Successfully.", "blue");
    }
}