import { useEffect, useState } from 'react';
import { fetchTodos } from '../services/todoService';
import { deleteTodo } from '../services/todoService';
import { Todo as TodoType } from '../types/todo';
import { Link } from 'react-router';

export default function List(){
    const [todos, setTodos] = useState<TodoType[]>([]);
      useEffect(() => {
        fetchTodos()
          .then(res =>
             setTodos(res.data))
          .catch(err => console.error('Erreur :', err));
      }, []);

      const handleDelete = async (_id: string) => {
        const confirmDelete = window.confirm('Supprimer cette tâche ?');
        if (!confirmDelete) return;
      
        try {
          await deleteTodo(_id);
          setTodos((prev) => prev.filter((todo) => todo._id !== _id));
        } catch (err) {
          console.error('Erreur lors de la suppression :', err);
        }
      };

    return(
        <div>
            <div className="max-w-md mx-auto mt-10 px-4">
                <p className="mt-5 bg-fuchsia-950 mb-3">components Liste.tsx :</p>
            </div>
            <h1 className='mb-5'>Liste des Todos</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {todos.map((todo) => (
                    <div key={todo._id} className="relative border border-fuchsia-800 rounded-4xl p-5 mb-5 bg-fuchsia-950 text-white shadow-md">
                        <button onClick={() => handleDelete(todo._id)} className="absolute top-4 right-4 text-white  w-0 h-5 flex items-center justify-center ">
                            ×
                        </button>
                        <p className="font-bold text-lg mb-2">ID : {todo._id}</p>
                        
                        <p className="font-bold mb-1">{todo.title}</p>

                        <p className="text-sm mb-2">{todo.description}</p>

                        <p className="text-md mb-1">Complété : {todo.completed ? "Oui" : "Non"}</p>

                        <p className="text-md mb-1">Priorité : {todo.priority}</p>

                        <p className="text-md mb-1">Date : {todo.dueDate}</p>

                        <p className="text-md mb-1">Catégorie : {todo.category}</p>

                        <p className="text-md font-bold mb-1 mt-5">Tags :</p>
                        <div className="flex gap-2 justify-center">
                            {todo.tags?.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 mb-5">
                <Link to="/addTodo">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à AddTodo.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/login">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Login.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/logo">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Logo.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/tests">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Test.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/welcome">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Welcome.tsx
                    </button>
                </Link>
            </div>
        </div>
    )
}