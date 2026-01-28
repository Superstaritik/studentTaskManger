const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title
  });

  const savedTask = await newTask.save();
  res.json(savedTask);
};
