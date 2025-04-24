import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, deleteTodo } from '../services/todoService';
import { Todo as TodoType } from '../types/todo';
import { Link } from 'react-router';

export default function List() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleDelete = (_id: string) => {
    const confirmDelete = window.confirm('Supprimer cette tâche ?');
    if (confirmDelete) {
      deleteMutation.mutate(_id);
    }
  };

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des todos.</p>;

  const todos: TodoType[] = data?.data ?? [];

  return (
    <div>
      <div className="mt-5 mb-5">
        <Link to="/logo">
          <button className="flex items-center gap-1 rounded border border-white px-3 py-1.5 text-sm text-white transition-all hover:border-fuchsia-500 hover:text-fuchsia-500">
            <span className="mr-1 text-lg">←</span> Retour
          </button>
        </Link>
      </div>
      <div className="mx-auto mt-10 max-w-md px-4">
        <p className="mt-5 mb-3 bg-fuchsia-950">components Liste.tsx :</p>
      </div>
      <h1 className="mb-5">Liste des Todos</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="relative mb-5 rounded-4xl border border-fuchsia-800 bg-fuchsia-950 p-5 text-white shadow-md"
          >
            <button
              onClick={() => handleDelete(todo._id)}
              className="absolute top-4 right-4 flex h-5 w-0 items-center justify-center text-white"
            >
              ×
            </button>
            <p className="mb-2 text-lg font-bold">ID : {todo._id}</p>
            <p className="mb-1 font-bold">{todo.title}</p>
            <p className="mb-2 text-sm">{todo.description}</p>
            <p className="text-md mb-1">
              Complété : {todo.completed ? 'Oui' : 'Non'}
            </p>
            <p className="text-md mb-1">Priorité : {todo.priority}</p>
            <p className="text-md mb-1">Date : {todo.dueDate}</p>
            <p className="text-md mb-1">Catégorie : {todo.category}</p>
            <p className="text-md mt-5 mb-1 font-bold">Tags :</p>
            <div className="flex justify-center gap-2">
              {todo.tags?.map((tag, index) => <p key={index}>{tag}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
