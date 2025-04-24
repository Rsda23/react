// src/pages/EditTodo.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import TodoForm from '../components/todo/TodoForm';
import { getTodos, updateTodo } from '../utils/mockData';
import { Todo, TodoFormData } from '../types/todo';

const EditTodo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<Todo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const todoId = parseInt(id, 10);
      const todos = getTodos();
      const foundTodo = todos.find(t => t.id === todoId);
      
      if (foundTodo) {
        setTodo(foundTodo);
      } else {
        setError(`Aucune tâche trouvée avec l'ID ${id}`);
      }
      
      setIsLoading(false);
    }
  }, [id]);

  const handleUpdateTodo = (todoData: TodoFormData) => {
    if (todo) {
      const updatedTodo: Todo = {
        ...todoData,
        id: todo.id
      };
      updateTodo(updatedTodo);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-gray-500">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        <p>{error}</p>
        <button 
          onClick={() => navigate('/app')} 
          className="mt-2 text-sm underline"
        >
          Retour à la liste
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Modifier la tâche</h1>
      {todo && <TodoForm initialData={todo} onSubmit={handleUpdateTodo} isEdit />}
    </div>
  );
};

export default EditTodo;