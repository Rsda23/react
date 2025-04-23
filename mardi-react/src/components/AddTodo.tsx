import { useState } from 'react';
import { createTodo } from '../services/todoService';
import { Link } from 'react-router';


export default function AddTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const completed = false;
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const handleSubmit = async () => {
        if (!title || !dueDate) return;
      
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
        } catch (err) {
          console.error('Erreur ajout todo :', err);
        }
      };
      return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <p className="mt-5 bg-fuchsia-950 mb-8">components AddTodo.tsx :</p>
            <div className="max-w-xl mx-auto border p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">Ajouter une todo</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">Titre</label>
                        <input className="p-2 rounded text-white border" value={title} onChange={(e) => setTitle(e.target.value)}  />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">Description</label>
                        <input className="p-2 rounded text-white border" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">Priorité</label>
                        <input className="p-2 rounded text-white border" value={priority} onChange={(e) => setPriority(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">Date</label>
                        <input className="p-2 rounded text-white border" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">Catégorie</label>
                        <input className="p-2 rounded text-white border" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold">Tags (virgule pour séparer)</label>
                        <input className="p-2 rounded text-white border" value={tags.join(',')} onChange={(e) => setTags(e.target.value.split(','))} />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button onClick={handleSubmit} className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-all">
                    Ajouter
                    </button>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/login">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Login.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/list">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Liste.tsx
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
      );
}