// src/components/todo/TodoList.tsx
import React, { useState, useEffect } from 'react';
import { Todo } from '../../types/todo';
import TodoItem from './TodoItem';
import { getTodos, deleteTodo, toggleTodoCompleted } from '../../utils/mockData';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Charger les todos
  useEffect(() => {
    const loadTodos = () => {
      try {
        const loadedTodos = getTodos();
        setTodos(loadedTodos);
        
        // Extraire toutes les catégories uniques
        const uniqueCategories = Array.from(
          new Set(loadedTodos.map(todo => todo.category))
        ).filter(Boolean);
        
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error loading todos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  // Filtrer les todos
  const filteredTodos = todos.filter(todo => {
    // Filtre par statut
    if (filter === 'completed' && !todo.completed) return false;
    if (filter === 'active' && todo.completed) return false;
    
    // Filtre par catégorie
    if (categoryFilter && todo.category !== categoryFilter) return false;
    
    return true;
  });

  // Gérer la suppression d'un todo
  const handleDeleteTodo = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  // Basculer l'état complété d'un todo
  const handleToggleComplete = (id: number) => {
    const updatedTodo = toggleTodoCompleted(id);
    if (updatedTodo) {
      setTodos(prev => 
        prev.map(todo => todo.id === id ? updatedTodo : todo)
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-gray-500">Chargement des tâches...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Mes tâches</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-md ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Actifs
            </button>
            <button 
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-md ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Terminés
            </button>
          </div>
          
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300"
          >
            <option value="">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      {filteredTodos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTodos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <p className="text-gray-500">Aucune tâche ne correspond à vos critères.</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;