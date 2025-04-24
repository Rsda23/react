import { useState } from 'react';
import { createTodo } from '../services/todoService';
import { Link, useNavigate } from 'react-router';

export default function AddTodo() {
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    completed: boolean;
    priority: string;
    dueDate: string;
    category: string;
    tags: string[];
  }>({
    title: '',
    description: '',
    completed: false,
    priority: '',
    dueDate: '',
    category: '',
    tags: [],
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'tags' ? value.split(',') : value,
    }));
  };

  const handleAdd = async () => {
    const { title, dueDate } = formData;

    if (!title || !dueDate) {
      alert('Le titre et la date sont obligatoires');
      return;
    }

    try {
      await createTodo(formData);
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
              name="title"
              className="rounded border p-2 text-white"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Description</label>
            <input
              name="description"
              className="rounded border p-2 text-white"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Priorité</label>
            <input
              name="priority"
              className="rounded border p-2 text-white"
              value={formData.priority}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Date</label>
            <input
              name="dueDate"
              className="rounded border p-2 text-white"
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Catégorie</label>
            <input
              name="category"
              className="rounded border p-2 text-white"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">
              Tags (virgule pour séparer)
            </label>
            <input
              name="tags"
              className="rounded border p-2 text-white"
              value={formData.tags.join(',')}
              onChange={handleChange}
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
