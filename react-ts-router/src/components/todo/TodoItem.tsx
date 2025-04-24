// src/components/todo/TodoItem.tsx
import React from 'react';
import { Link } from 'react-router';
import { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ 
  todo, 
  onToggleComplete, 
  onDelete 
}) => {
  return (
    <div className={`bg-white shadow rounded-lg overflow-hidden ${todo.completed ? 'border-l-4 border-green-500' : ''}`}>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-semibold ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            todo.priority === 'high' ? 'bg-red-100 text-red-800' :
            todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {todo.priority}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{todo.description}</p>
        
        <div className="text-xs text-gray-500 mb-3">
          <p>Catégorie: {todo.category}</p>
          <p>Échéance: {new Date(todo.dueDate).toLocaleDateString()}</p>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {todo.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onToggleComplete(todo.id)}
            className={`px-3 py-1 rounded-md text-sm ${
              todo.completed 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-green-100 text-green-800'
            }`}
          >
            {todo.completed ? 'Annuler' : 'Terminer'}
          </button>
          <Link 
            to={`/app/edit/${todo.id}`}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm"
          >
            Modifier
          </Link>
          <button 
            onClick={() => onDelete(todo.id)}
            className="bg-red-100 text-red-800 px-3 py-1 rounded-md text-sm"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;