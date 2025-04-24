// src/pages/AddTodo.tsx
import React from 'react';
import TodoForm from '../components/todo/TodoForm';
import { addTodo } from '../utils/mockData';
import { TodoFormData } from '../types/todo';

const AddTodo: React.FC = () => {
  const handleAddTodo = (todoData: TodoFormData) => {
    addTodo(todoData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Ajouter une nouvelle tâche</h1>
      <TodoForm onSubmit={handleAddTodo} />
    </div>
  );
};

export default AddTodo;