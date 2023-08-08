const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

const { getFortune, getTask, createTask } = require("./controller");
app.get("/todolist", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/todolist.html"))
);

app.get("/api/fortune", getFortune); // get fortunes
app.get("/api/task", getTask); // get task
app.post("/api/task", createTask); //create task

app.listen(4050, () => console.log("Server running on 4050"));
