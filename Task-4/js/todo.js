document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todoForm");
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const clearAll = document.getElementById("clearAll");

  // Load saved tasks
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task));

  // Add task
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText) {
      addTask(taskText);
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      input.value = "";
    }
  });

  // Add task to UI
  function addTask(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "✖";
    delBtn.addEventListener("click", () => {
      li.remove();
      const updated = tasks.filter((t) => t !== text);
      localStorage.setItem("tasks", JSON.stringify(updated));
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  }

  // Clear all
  clearAll.addEventListener("click", () => {
    taskList.innerHTML = "";
    localStorage.removeItem("tasks");
  });
});
