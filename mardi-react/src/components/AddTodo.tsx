import { useState } from 'react';
import { createTodo } from '../services/todoService';
import { Link, useNavigate } from 'react-router';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const completed = false;
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (!title || !dueDate) {
      alert('Le titre et la date sont obligatoires');
      return;
    }

    const newTodo = {
      title,
      description,
      completed,
      priority,
      dueDate,
      category,
      tags,
    };

    try {
      await createTodo(newTodo);
      alert('Ajout effectué');
      navigate('/list');
    } catch (err) {
      alert('Erreur ajout todo');
      console.error('Erreur ajout todo :', err);
    }
  };
  return (
    <div className="mx-auto mt-10 max-w-md px-4">
      <div className="mt-5 mb-5">
        <Link to="/logo">
          <button className="flex items-center gap-1 rounded border border-white px-3 py-1.5 text-sm text-white transition-all hover:border-fuchsia-500 hover:text-fuchsia-500">
            <span className="mr-1 text-lg">←</span> Retour
          </button>
        </Link>
      </div>
      <p className="mt-5 mb-8 bg-fuchsia-950">components AddTodo.tsx :</p>
      <div className="mx-auto max-w-xl rounded-2xl border p-6">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Ajouter une todo
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Titre</label>
            <input
              className="rounded border p-2 text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Description</label>
            <input
              className="rounded border p-2 text-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Priorité</label>
            <input
              className="rounded border p-2 text-white"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Date</label>
            <input
              className="rounded border p-2 text-white"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Catégorie</label>
            <input
              className="rounded border p-2 text-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">
              Tags (virgule pour séparer)
            </label>
            <input
              className="rounded border p-2 text-white"
              value={tags.join(',')}
              onChange={(e) => setTags(e.target.value.split(','))}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleAdd}
            className="hover:bg-whitetransition-all rounded bg-black px-6 py-2 text-white hover:text-fuchsia-500"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
