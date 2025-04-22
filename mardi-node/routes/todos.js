import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

// GET tous les todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST un nouveau todo
router.post('/', async (req, res) => {
  const newTodo = await Todo.create(req.body);
  res.json(newTodo);
});

// DELETE un todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo supprimé' });
});

export default router;
