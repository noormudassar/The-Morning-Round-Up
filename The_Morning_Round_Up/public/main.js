const fortuneButton = document.getElementById("fortuneButton");
const addButton = document.getElementById("addButton");
const newInput = document.getElementById("new-item");
let tasks = [];

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

// fortuneButton.addEventListener("click", getFortune);
addButton.addEventListener("click", createTask);
