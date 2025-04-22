import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  completed: Boolean,
  priority: String,
  dueDate: String,
  category: String,
  tags: [String],
});

export default mongoose.model('Todo', todoSchema, 'data');
