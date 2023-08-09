const fortuneButton = document.getElementById("fortuneButton");
const addButton = document.getElementById("addButton");
const newInput = document.getElementById("new-item");
const taskContainer = document.getElementById("list-container");
let tasks = [];

const taskCallback = ({ data: tasks }) => displayTasks(tasks);
const errCallback = (err) => console.log(err);

const getAllTasks = () =>
  axios.get(baseUrl).then(taskCallback).catch(errCallback);

const getFortune = () => {
  axios
    .get("http://localhost:4050/api/fortune/")
    .then((res) => {
      const data = res.data;
      alert(data);
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
      alert("Error!");
    });
};

const createTask = (event) => {
  event.preventDefault();
  const task = newInput.value;
  let body = { task };
  axios
    .post("http://localhost:4050/api/task/", body)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

function createTaskCard(task) {
  const tasksCard = document.createElement("div");
  tasksCard.classList.add("task-card");

  tasksCard.innerHTML = ` <p class="address">${task}</p>`;

  taskContainer.appendChild(tasksCard);
}

function displayTasks(arr) {
  taskContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createTaskCard(arr[i]);
  }
}

// fortuneButton.addEventListener("click", getFortune);
addButton.addEventListener("click", createTask);

getAllTasks;
