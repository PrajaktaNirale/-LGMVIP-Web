// Selecting elements
const newTaskInput = document.querySelector("#new-task-input");
const newTaskSubmit = document.querySelector("#new-task-submit");
const todoList = document.querySelector(".todoList");

// Adding event listeners
newTaskSubmit.addEventListener("click", addTask);
todoList.addEventListener("click", deleteTask);

// Function to add new task
function addTask(event) {
  event.preventDefault(); // Prevent form submission
  const taskTitle = newTaskInput.value.trim();
  if (taskTitle !== "") {
    const newTask = document.createElement("li");
    newTask.innerText = taskTitle;
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    const deleteButton = document.createElement("span");
    deleteButton.appendChild(deleteIcon);
    newTask.appendChild(deleteButton);
    todoList.appendChild(newTask);
    newTaskInput.value = ""; // Clear input field
  }
}

// Function to delete task
function deleteTask(event) {
  if (event.target.classList.contains("fa-trash")) {
    const task = event.target.parentElement.parentElement;
    task.remove();
  }
}
