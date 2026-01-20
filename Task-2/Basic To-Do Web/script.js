const form = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const completedList = document.getElementById("completedList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const datetime = document.getElementById("datetime").value;
  const formattedDate = new Date(datetime).toLocaleString();

  const item = document.createElement("div");
  item.className = "todo-item";

  item.innerHTML = `
    <span>${title}</span>
    <span>${description}</span>
    <span>${formattedDate}</span>
    <button class="complete-btn">Complete</button>
  `;

  item.querySelector(".complete-btn").addEventListener("click", () => {
    item.classList.add("completed");
    item.querySelector(".complete-btn").remove();

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = () => item.remove();
    item.appendChild(deleteBtn);

    completedList.appendChild(item);
  });

  todoList.appendChild(item);
  form.reset();
});
