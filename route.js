// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo'); // Assuming Todo model for interacting with the database

// Route to get all todo items
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to add a new todo item
router.post('/', async (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Other routes for updating/deleting todo items...

module.exports = router;
