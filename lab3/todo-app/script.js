const taskInput = document.querySelector("#new-todo");
const addTaskBtn = document.querySelector("#add-todo");
const taskList = document.querySelector("#list-todo");
const dateControl = document.querySelector('input[type="date"]');

const dateNow = new Date();

let tasks = [
  { name: "Buy Milk", done: false, deadline: new Date("2023-03-01") },
  { name: "Coding", done: false, deadline: new Date("2023-03-07") },
  { name: "Wash dish", done: false, deadline: new Date("2024-05-23") },
];

const addTask = () => {
  if (taskInput.value === "") {
    alert("Error: Empty input");
    return;
  }
  deadline = dateControl.value;
  tasks.push({ name: taskInput.value, done: false, deadline: new Date(deadline) });
  taskInput.value = "";
  dateControl.value = "";
  renderTasks();
};

const markTaskDone = (index) => {
  tasks[index].done = !tasks[index].done;
  renderTasks();
};

const checkDate = (date) => {
  return date > dateNow;
}

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML =
      `<input type="checkbox" class="mark-done-btn" ${task.done ? "checked" : ""} />
      <div class="item ${task.done ? "done" : ""}">${task.name} <div class="deadline ${!checkDate(task.deadline) ? "done" : ""}">Deadline: ${task.deadline.getFullYear()}-${task.deadline.getMonth()}-${task.deadline.getDate()}</div></div>` +
      `<div class="delete-btn" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></div>`;
    taskItem.querySelector(".mark-done-btn").addEventListener("click", () => {
      markTaskDone(index);
    });
    taskList.appendChild(taskItem);
  });
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

addTaskBtn.addEventListener("click", addTask);

renderTasks();
