// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Check if input is empty
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create new task item
    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);

    // Clear the input
    taskInput.value = "";
}

// Edit task by clicking on task text
document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        const newTask = prompt("Edit task:", event.target.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            event.target.textContent = newTask;
        }
    }
});
