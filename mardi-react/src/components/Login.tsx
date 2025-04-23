import { useState } from 'react';
import { Link } from 'react-router';


export default function Login(){
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const handleLogin = async () => {
            
          };

    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <p className="mt-5 bg-fuchsia-950 mb-8">components Login.tsx :</p>
            <div className="max-w-xl mx-auto border p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 text-sm font-semibold">Identifiant</label>
                        <input className="p-2 rounded text-white border" value={login} onChange={(e) => setLogin(e.target.value)}  />
                    </div>

                    <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 text-sm font-semibold">Mot de passe</label>
                        <input className="p-2 rounded text-white border" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button onClick={handleLogin} className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-fuchsia-700 transition-all">
                    Se connecter
                    </button>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/addTodo">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à AddTodo.tsx
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
