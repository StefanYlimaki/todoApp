const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Todo = require("./models/todo");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("default endpoint");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/api/todos", async (req, res) => {
  Todo.find({}).then((todo) => {
    res.json(todo);
  });
});

app.post("/api/todos", async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  console.log(todo.text);
  todo.save().then((savedTodo) => {
    res.json(savedTodo);
  });
});

app.delete("/api/todos/:id", async (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => {
      res.json("error occured", error);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});

module.exports = app;